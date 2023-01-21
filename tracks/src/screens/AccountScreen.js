import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from '../context/authContext';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/Spacer';

const AccountScreen = () => {

    const { signOut } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Account</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signOut} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({

})

export default AccountScreen;