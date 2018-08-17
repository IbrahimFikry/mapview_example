import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import { Marker } from 'react-native-maps';

export default class App extends Component {
  state = {
    location: "",
    errorMessage: "",
    finalLocation:"",
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log("before setState"+JSON.stringify(location))
      console.log("before setState"+JSON.stringify(this.state.finalLocation))
    this.setState({finalLocation:location});
          console.log("this is in componentWillMount"+JSON.stringify(this.state.finalLocation))
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      this.state.finalLocation = this.state.location;
      console.log(this.state.finalLocation.timestamp)
      console.log(this.state.finalLocation.coords.accuracy)

      return (

          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.finalLocation.coords.latitude,
              longitude:this.state.finalLocation.coords.longitude,
              latitudeDelta: 0.0922*0.1,
              longitudeDelta: 0.0421*0.1,
            }}>
            <Marker
              coordinate={{
                latitude: this.state.finalLocation.coords.latitude,
                longitude: this.state.finalLocation.coords.longitude,
              }}
              title="Amirahh!!"
              description="Tong Sampah ni dh penuh... tlg amik saya please :3 #dhpenuhtongsampah!"
          />
  </MapView>
      );
    }

    if(this.state.finalLocation){
      return (<View style={styles.container}><Text>{this.state.finalLocation.coords.latitude}</Text></View>);
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>loading...</Text>

        </View>
      );
    }


  }
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
backgroundColor: '#4169e1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
