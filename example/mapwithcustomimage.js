import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

import { Marker } from 'react-native-maps';

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

  render() {
    //Do a loop function to generate multiple marker on the Mapview
    const x = [];

    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={this.state.region}>
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
