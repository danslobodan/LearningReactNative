import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input 
                value={email} 
                label="Email" 
                onChangeText={setEmail} 
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                value={password} 
                label="Password" 
                onChangeText={setPassword} 
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer>
                <Button title="Sign Up" onPress={() => navigation.navigate('SignIn')} />
            </Spacer>
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
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