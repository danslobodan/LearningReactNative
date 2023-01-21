import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);

    useEffect(() => {

        let subscriber;

        const startWatching = async () => {
            const { granted } = await requestForegroundPermissionsAsync();
            
            if (!granted) {
                setErr('Location permission not granted');
                return;
            }
    
            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                callback(location);
            });
    
            setErr('');
        }

        const stopWatching = async () => {
            if (subscriber)
                subscriber.remove();
            
            subscriber = null;
        }

        if (shouldTrack)
            startWatching();
        else
            stopWatching();

        return () => {
            if (subscriber)
                subscriber.remove();
        }
    }, [shouldTrack, callback]);

    return [err]
}