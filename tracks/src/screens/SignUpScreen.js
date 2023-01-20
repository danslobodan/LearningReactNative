import React from "react";
import { View, StyleSheet, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 48 }}>SignUpScreen</Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('SignIn')} />
            <Button title="Go main flow" onPress={() => navigation.navigate('mainFlow')} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignUpScreen;