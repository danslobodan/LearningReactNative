import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState('');

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onChange={setTerm} 
                onTermSubmit={() => console.log("submitted")}
            />
            <Text>Current search {term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF'
    }
})

export default SearchScreen;