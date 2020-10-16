import React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text , TouchableOpacity, TextInput} from 'react-native'; 
import HeaderContainer from '../components/header';

function Position(){



    let Position = [
      {
        "coordinate": {
          "lat": 3.785316,
          "long":11.626539,
          "cot" : 12,
          "key": Math.random()
        } 
      },

      {
        "coordinate": {
          "lat": 4.471259,
          "long":11.447409,
          "cot" : 2,
          "key": Math.random()
        } 
      },

      {
        "coordinate": {
          "lat": 3.809926,
          "long":11.476185,
          "cot" : 2,
          "key": Math.random()
        } 
      },

      {
        "coordinate": {
          "lat": 14.283688,
          "long":79.223996,
          "cot" : 4,
          "key": Math.random()
        } 
      },

      {
        "coordinate": {
          "lat": 3.834319,
          "long":11.488119,
          "cot": 1,
          "key": Math.random()
        } 
      },

      {
        "coordinate": {
          "lat": 3.872577,
          "long":11.531721,
          "cot": 3,
          "key": Math.random()
        } 
      },
    ]

    return Position;
}

export default function Localisation ({navigation}){

  let Zones = Position();
  let positionO = [];
  let positionV = [];
  let positionR = [];

  let j = 0, comp = Zones.length;
  for (let i = 0; i < comp; i++) {
    if(Zones[i].coordinate.cot >= 1 ){
      positionO.push(Zones[i]);
    }
    if(Zones[i].coordinate.cot <= 2){
      positionV.push(Zones[i]) ;
    }else{
      positionR.push(Zones[i]);
    }
  }

  let position2 = [];
  positionO.forEach(element => {
    position2.push(
      <Circle key='1' center = {{ latitude:element.coordinate.lat, longitude:element.coordinate.long }} strokeWidth={30} strokeColor={'orange'} radius={100} ></Circle>
    )
  })

  positionV.forEach(element => {
    position2.push(
      
      <Circle key='2'   center = {{ latitude:element.coordinate.lat, longitude:element.coordinate.long }} strokeWidth={30} strokeColor={'green'} radius={100} ></Circle>
    )
  })

  positionR.forEach(element => {
    position2.push(
      
      <Circle key='3'  center = {{ latitude:element.coordinate.lat, longitude:element.coordinate.long }} strokeWidth={30} strokeColor={'red'} radius={100} ></Circle>
    )
  })



  return (
    <View style={styles.container}>
      <HeaderContainer navigation={navigation} /> 
      <MapView style={styles.mapStyle}  initialRegion= {{latitude:3.866667, longitude:11.516667, latitudeDelta:0.0922, longitudeDelta:0.00421}} maxZoomLevel={15} minZoomLevel={15} mapType="mutedStandard">
          {position2}
      </MapView>
    </View>
  );

} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },

  mapStyle: {
    flex:2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  body:{
    marginLeft:3,
    marginRight:3
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor:"#165BC0",
    marginBottom: 20,
  },

});