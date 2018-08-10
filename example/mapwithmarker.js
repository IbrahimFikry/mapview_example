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
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={this.state.region}>

        <Marker
          coordinate={{
            latitude: 3.130791,
            longitude: 101.682306,
          }}
          title="This is me!"
          description="Testing!"
        />

      </MapView>
    )
  }
}
