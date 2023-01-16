import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term,
                limit: 50,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onChange={setTerm} 
                onTermSubmit={searchApi}
            />
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF'
    }
})

export default SearchScreen;