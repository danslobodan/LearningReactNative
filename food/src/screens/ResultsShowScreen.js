import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result)
        return null;

    return (
        <View>
            <Text>Results Show</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: 300
    }
})

export default ResultsShowScreen;