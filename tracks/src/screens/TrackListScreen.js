import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";


const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text h2>Track List</Text>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => {
                        navigation.navigate('TrackDetail', { _id: item._id });
                    }}>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {item.name}
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({

})

export default TrackListScreen;