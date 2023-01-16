import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.colorBoxOneStyle} />
            <View style={styles.colorBoxTwoStyle} />
            <View style={styles.colorBoxThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        height: 160,
        borderColor: 'black',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    colorBoxOneStyle: {
        height: 80, 
        width: 100, 
        backgroundColor: 'rgb(255, 120, 120)'
    },
    colorBoxTwoStyle: {
        alignSelf: "flex-end",
        height: 80, 
        width: 100, 
        backgroundColor: 'rgb(120, 255, 120)' 
    },
    colorBoxThreeStyle: {
        height: 80, 
        width: 100, 
        backgroundColor: 'rgb(120, 120, 255)' 
    }
})

export default BoxScreen;