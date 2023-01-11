import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

    const name = 'Slobodan';

    return (
        <View>
            <Text style={{ fontSize: 45 }}>Getting started with react native!</Text>
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;