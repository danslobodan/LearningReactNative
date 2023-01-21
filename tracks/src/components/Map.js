import React from "react";
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {

    let points = [];
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 44.0128 + i * 0.001,
            longitude: 20.9114 + i * 0.001
        })
    }

    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 44.0128,
                longitude: 20.9114,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Polyline coordinates={points} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;