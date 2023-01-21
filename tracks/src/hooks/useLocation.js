import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (callback) => {

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
            callback(location);
        });

        setErr('');
    }

    useEffect(() => {
        startWatching();
    }, []);

    return [err]
}