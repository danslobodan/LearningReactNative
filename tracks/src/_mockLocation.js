import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

export const getLocation = increment => {

    const lat = 44.0298282 + (increment * tenMetersWithDegrees);
    const lon = 20.9104691 + (increment * tenMetersWithDegrees);

    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 285,
            longitude: lon,
            latitude: lat
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