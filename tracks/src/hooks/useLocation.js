import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
        
        if (!granted) {
            setErr('Location permission not granted');
            return;
        }

        const sub = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
        }, (location) => {
            callback(location);
        });

        setSubscriber(sub);
        setErr('');
    }

    const stopWatching = () => {
        subscriber.remove();
        setSubscriber(null);
    }

    useEffect(() => {
        if (shouldTrack)
            startWatching();
        else
            stopWatching();
    }, [shouldTrack]);

    return [err]
}