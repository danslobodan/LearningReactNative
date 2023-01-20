import React, { useState, useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/authContext';

const SignUpScreen = ({ navigation }) => {

    const { state, signUp } = useContext(AuthContext);
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
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign Up" onPress={() => signUp({ email, password })} />
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
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
})

export default SignUpScreen;