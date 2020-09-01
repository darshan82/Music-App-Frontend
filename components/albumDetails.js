import React from 'react';
import { Text, Linking,View, Image } from 'react-native';
import Card from './Card';
import CardSection from './cardSection';
import Button from "./Button"

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image ,url} = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text style={styles.headerTextStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: album.image }} />
      </CardSection>
      
      <CardSection>
       <Button  onPress={()=>Linking.openURL(url)}>
       Buy Now
       </Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-aroud',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  imageStyle: { height: 300, flex: 1, width: null },
  thumbnailContainer: {
    justifyContent: 'center',
    alginContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};
export default AlbumDetails;
