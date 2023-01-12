import React, { useReducer } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const clampColor = (value) => clamp(value, 0, 255);

    switch(action.type) {
        case 'change_red':
            return {...state, red: clampColor(state.red + action.payload) }
        case 'change_green':
            return {...state, green: clampColor(state.green + action.payload) }
        case 'change_blue':
            return {...state, blue: clampColor(state.blue + action.payload) }
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })} 
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })} 
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })} 
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
            <Text>{`Red ${red} Green ${green} Blue ${blue}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen;