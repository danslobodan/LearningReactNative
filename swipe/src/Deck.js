import React, { useEffect, useRef, useState } from "react";
import { 
    StyleSheet, 
    Dimensions, 
    Animated, 
    PanResponder,
    LayoutAnimation,
    UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Deck = ({ data, renderCard, onSwipeLeft, onSwipeRight, renderNoMoreCards }) => {

    const [index, setIndex] = useState(0);
    const position = useRef(new Animated.ValueXY()).current;

    useEffect(() => {
        setIndex(0);
    }, [data]);

    useEffect(() => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    });

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    }

    const onSwipeComplete = (direction) => {

        const item = data[index];

        direction === 'right'
            ? onSwipeRight(item)
            : onSwipeLeft(item);

        position.setValue({ x: 0, y: 0 });
        setIndex(prevIndex => prevIndex + 1);
    }

    const forceSwipe = (direction) => {

        const x = direction === 'right' 
            ? SCREEN_WIDTH
            : -SCREEN_WIDTH;

        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: false
        }).start(() => onSwipeComplete(direction));
    }

    const endSwipe = (dx) => {

        if (dx > SWIPE_THRESHOLD) {
            forceSwipe('right');
        }
        else if (dx < -SWIPE_THRESHOLD) {
            forceSwipe('left');
        }
        else
            resetPosition();
    };

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx , y: gesture.dy });
        },
        onPanResponderRelease: (event, gesture) => {
            endSwipe(gesture.dx);
        }
    })).current;

    const getCardStyle = () => {

        const rotationMultiplier = 1.5;

        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * rotationMultiplier, 0, SCREEN_WIDTH * rotationMultiplier],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        };
    }


    const renderCards = () => {

        if (index >= data.length)
            return renderNoMoreCards();
    
        return data.map((item, i) => {

            if (i < index)
                return null;
                
            if (i === index) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[getCardStyle(), styles.card]}
                        {...panResponder.panHandlers}
                    >
                        {renderCard(item)}
                    </Animated.View>
                )
            }

            return (
                <Animated.View 
                    key={item.id}
                    style={[styles.card, { top: (i - index) * 10 }]}
                >
                    {renderCard(item)}
                </Animated.View>
            )
        }).reverse();
    };

    return renderCards();
}

Deck.defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
}

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        width: SCREEN_WIDTH
    }
})

export default Deck;