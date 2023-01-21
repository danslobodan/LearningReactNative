import React, { useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/authContext';

import Spacer from '../components/Spacer';

const AccountScreen = () => {

    const { signOut } = useContext(AuthContext);

    return (
        <>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signOut} />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({

})

export default AccountScreen;