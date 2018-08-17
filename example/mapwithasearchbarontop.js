import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, Alert, TextInput, Dimensions } from 'react-native';
import { MapView, Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Marker } from 'react-native-maps';

const CONST_WIDTH = Dimensions.get('window').width;
const searchbarwidth = CONST_WIDTH - 16 - 16;

export default class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: {
          latitude: 3.130791,
          longitude: 101.682306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }
    }
  }
  //
  // <View style={styles.inside}>
  //
  //   <View style={styles.row}>
  //       <Text>Hello</Text>
  //
  //       <Text>Ibrahim</Text>
  //
  //   </View>
  //
  // </View>


  render() {
    //Do a loop function to generate multiple marker on the Mapview
    const x = [];

    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={this.state.region}>

        <View style={styles.searchbar}>
      

            <Text>Search</Text>

        </View>
        <Marker
          coordinate={{
            latitude: 3.130791,
            longitude: 101.682306,
          }}
          title="Aisyah!!"
          description="Tong Sampah ni dh penuh... tlg amik saya please :3 #dhpenuhtongsampah!"
        />

        <Marker coordinate={{ latitude: 7.130791, longitude: 101.682306, }} image={require('../here.jpg')}/>



      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  searchbar: {
    //flexDirection:'row',
    backgroundColor: 'grey' ,
    width:searchbarwidth,
    marginTop:16,
    marginBottom:16,
    marginLeft:16,
    marginRight:16,
  },
  searchbar2: {
    alignItems:'center'
  },
});
