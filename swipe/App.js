import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from "react-native-elements";

import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://i.picsum.photos/id/156/2177/3264.jpg?hmac=hjKWxNR5fYw1fbGYXknGDH6eRORZ_AlTeQBvyT2q_Cs' },
  { id: 2, text: 'Card #2', uri: 'https://i.picsum.photos/id/157/5000/3914.jpg?hmac=A23PziOOpi_DIdiPRI30m9_1A8keOtMF3a6Vb-D7dRA' },
  { id: 3, text: 'Card #3', uri: 'https://i.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c' },
  { id: 4, text: 'Card #4', uri: 'https://i.picsum.photos/id/159/5000/2460.jpg?hmac=h12oeFVhY4-vOrALaICJ4k4dqemWn1lvaMN8yvnIU1w' },
  { id: 5, text: 'Card #5', uri: 'https://i.picsum.photos/id/161/4240/2832.jpg?hmac=LxG8oJEn91SpyJrBtLXd85CZfw9KBcI10x5c5M4Y_NQ' },
  { id: 6, text: 'Card #6', uri: 'https://i.picsum.photos/id/162/1500/998.jpg?hmac=j-Xr1aKHzCJQigPBLF0nKTudXM2w9u1-Smxlam0YOt8' },
  { id: 7, text: 'Card #7', uri: 'https://i.picsum.photos/id/163/2000/1333.jpg?hmac=htdHeSJwlYOxS8b0TTpz2s8tD_QDlmsd3JHYa_HGrg8' },
  { id: 8, text: 'Card #8', uri: 'https://i.picsum.photos/id/164/1200/800.jpg?hmac=wkqGUkaeW3kiAsHq_VwxSWWossIMAwFV4eUfFzuDkew' },
];

export default function App() {

  const renderCard = (item) => {

    return (
      <Card key={item.id}>
          <Card.Title>{item.text}</Card.Title>
          <Image source={{ uri: item.uri }} style={{ height: 150 }}/>
          <Text style={{ marginBottom: 10 }}>I can customize this card further</Text>
          <Button 
            icon={{ name: 'code' }} 
            title="View Now" 
            buttonStyle={{
              backgroundColor: "#03A9F4" 
            }}
          />
      </Card>
    )
  }

  const renderNoMoreCards = () => {

    return (
      <Card>
        <Card.Title>All Done!</Card.Title>
        <Text style={{ marginBottom: 10 }}>There's no more content here</Text>
        <Button 
          icon={{ name: 'code' }} 
          title="Get more!" 
          buttonStyle={{
            backgroundColor: "#03A9F4" 
          }}
        />
      </Card>     
    )
  }

  return (
    <View style={styles.container}>
      <Deck 
        data={DATA} 
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
