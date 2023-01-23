import React, { useRef } from "react";
import { Dimensions, Animated, PanResponder } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Deck = ({ data, renderCard }) => {

    const position = useRef(new Animated.ValueXY()).current;

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    }

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx , y: gesture.dy });
        },
        onPanResponderRelease: () => {
            resetPosition();
        }
    })).current;

    const getCardStyle = () => {

        const rotationMultiplier = 2;

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