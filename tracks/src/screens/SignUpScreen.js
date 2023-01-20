import React, { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from '../context/authContext';

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {

    const { state, signUp, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signUp}
                submitButtonText="Sign Up"
            />
            <NavLink 
                routeName="SignIn"
                text="Already have an account? Sign in instead"
            />
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
    }
})

export default SignUpScreen;