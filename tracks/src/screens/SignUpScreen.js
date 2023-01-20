import React, { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

import { Context as AuthContext } from '../context/authContext';

import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";

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