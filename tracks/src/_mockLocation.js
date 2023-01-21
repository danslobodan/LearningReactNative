import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.00001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 44.0298282 + increment * tenMetersWithDegrees,
            latitude: 20.9104691 + increment * tenMetersWithDegrees,
            mocked: true
        }
    }
}

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);