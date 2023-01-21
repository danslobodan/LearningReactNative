import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native-elements'

import { Context as LocationContext } from '../context/LocationContext';

import Map from '../components/Map';
import useLocation from "../hooks/useLocation";
// import '../_mockLocation';

const TrackCreateScreen = () => {

    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;