import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    term,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        }
        catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi();
    }, [])

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onChange={setTerm} 
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
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