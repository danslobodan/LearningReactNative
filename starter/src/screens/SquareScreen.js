import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 10;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const clampColor = (value) => clamp(value, 0, 255);

    return (
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => setRed(clampColor(red + COLOR_INCREMENT))} 
                onDecrease={() => setRed(clampColor(red - COLOR_INCREMENT))} 
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => setGreen(clampColor(green + COLOR_INCREMENT))} 
                onDecrease={() => setGreen(clampColor(green - COLOR_INCREMENT))} 
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => setBlue(clampColor(blue + COLOR_INCREMENT))} 
                onDecrease={() => setBlue(clampColor(blue - COLOR_INCREMENT))} 
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
            <Text>{`Red ${red} Green ${green} Blue ${blue}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen;