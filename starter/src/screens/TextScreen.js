import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

const MINIMUM_CHARACTERS = 5;

const TextScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            { password.length < 5 
                ? <Text>Password must be at least {MINIMUM_CHARACTERS} characters long.</Text>
                : null }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;