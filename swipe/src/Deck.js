import React, { useRef } from "react";
import { Animated, PanResponder } from 'react-native';

const Deck = ({ data, renderCard }) => {

    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx , y: gesture.dy });
        },
        onPanResponderRelease: () => {
        }
    })).current;


    const renderCards = () => data.map(item => renderCard(item));

    return (
        <Animated.View 
            style={position.getLayout()}
            {...panResponder.panHandlers}
        >
            {renderCards()}
        </Animated.View>
    )
}

export default Deck;