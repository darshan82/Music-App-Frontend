import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from "./components/header"
import AlbumList from "./components/AlbumList";

export default class App extends React.Component {
 
  render() {
    return (
      <View style={{flex:   1}}> 
     <Header headerText={'Albums'}/>
      <AlbumList/>    
      </View>
    );
  }
}
