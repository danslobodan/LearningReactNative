import React, { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native-elements'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

import Map from '../components/Map';
import '../_mockLocation';

const TrackCreateScreen = () => {

    const [err, setErr] = useState(null);

    const startWatching = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
        
        if (!granted) {
            setErr('Location permission not granted');
            return;
        }

        await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
        }, (location) => {
            console.log(location);
        });

        setErr('');
    }

    useEffect(() => {
        startWatching();
    }, []);

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