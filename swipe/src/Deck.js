import React, { useRef } from "react";
import { Dimensions, Animated, PanResponder } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Deck = ({ data, renderCard, onSwipeLeft, onSwipeRight }) => {

    const position = useRef(new Animated.ValueXY()).current;

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    }

    const onSwipeComplete = (direction) => {

        direction === 'right'
            ? onSwipeRight()
            : onSwipeLeft();
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

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx , y: gesture.dy });
        },
        onPanResponderRelease: (event, gesture) => {
            if (gesture.dx > SWIPE_THRESHOLD) {
                forceSwipe('right');
            }
            else if (gesture.dx < -SWIPE_THRESHOLD) {
                forceSwipe('left');
            }
            else
                resetPosition();
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


    const renderCards = () => data.map((item, i) => {
        if (i === 0) {
            return (
                <Animated.View
                    key={item.id}
                    style={getCardStyle()}
                    {...panResponder.panHandlers}
                >
                    {renderCard(item)}
                </Animated.View>
            )
        }

        return renderCard(item);
    });

    return renderCards();
}

export default Deck;