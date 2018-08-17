import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MapView, Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';




import JustMap from './example/justmap.js';
import MapwithMarker from './example/mapwithmarker.js';
import MapwithManyMarker from './example/mapwithmanymarker.js';
import Mapwithcustomimage from './example/mapwithcustomimage.js';
import MapwithLocation from './example/mapwithcurrentlocation.js';
import MapwithSearchBar from './example/mapwithasearchbarontop.js';

class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.containerori}>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("JustMap")}>
          <View style={styles.button}>
          <Text>Just Map</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("MarkerMap1")}>
          <View style={styles.button}>
          <Text>Map with 1 Marker</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("MarkerMany")}>
          <View style={styles.button}>
          <Text>Map with Multiple Marker</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("MapCustom")}>
          <View style={styles.button}>
          <Text>Map with Custom Image Marker</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("MapLocation")}>
          <View style={styles.button}>
          <Text>Map with Current Location</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("MapSearchBar")}>
          <View style={styles.button}>
          <Text>Map with SearchBar</Text>
          </View>
        </TouchableOpacity>



      </ScrollView>


    );
  }
}

export default createStackNavigator(
  {
    Home: {screen: App,},
    JustMap: {screen: JustMap,},
    MarkerMap1: {screen: MapwithMarker,},
    MarkerMany: {screen: MapwithManyMarker,},
    MapCustom: {screen : Mapwithcustomimage,},
    MapLocation: {screen : MapwithLocation,},
    MapSearchBar: {screen : MapwithSearchBar,},
  },
)

//export default JustMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerori: {
    paddingTop: Constants.statusBarHeight,
  },
  button: {
    backgroundColor: '#ffab29',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
});

// <View style={styles.container}>
//   <Text>Open up App.js to start working on your apalsdjsakdhsakjdhaskjdhaskjdhkp!</Text>
//   <Text>Changes you make will automatically reload.</Text>
//   <Text>Shake your phone to open the developer menu.</Text>
// </View>
