import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign Up" onPress={() => navigation.navigate('SignIn')} />
            </Spacer>
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: 'red',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignUpScreen;