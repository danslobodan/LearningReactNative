import React, { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from '../context/authContext';

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = () => {

    const { state, signIn, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign In to your account"
                errorMessage={state.errorMessage}
                onSubmit={signIn}
                submitButtonText="Sign In"
            />
            <NavLink 
                routeName="SignUp"
                text="Don't have an account? Sign up instead"
            />
        </View>
    )
}

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;