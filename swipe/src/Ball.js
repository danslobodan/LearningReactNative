import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native';

const Ball = () => {

    const position = useRef(new Animated.ValueXY(0, 0)).current;

    const move = () => {
        Animated.spring(position, {
            toValue: { x: 200, y: 500 },
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        move();
    }, [])

    return (
        <SafeAreaView>
            <Animated.View style={position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
})

export default Ball;