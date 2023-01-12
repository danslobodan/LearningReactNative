import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {

    return { ...state, counter: state.counter + action.payload };
}

const INCREMENT = 1;

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ payload: INCREMENT })} />
            <Button title="Decrease" onPress={() => dispatch({ payload: -INCREMENT })} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles =  StyleSheet.create({});

export default CounterScreen;