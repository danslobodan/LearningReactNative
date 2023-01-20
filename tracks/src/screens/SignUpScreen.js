import React, { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/authContext';

const SignUpScreen = ({ navigation }) => {

    const { state, signUp } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signUp}
                submitButtonText="Sign Up"
            />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
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
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    link: {
        color: 'blue'
    }
})

export default SignUpScreen;