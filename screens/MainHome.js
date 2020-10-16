import React, { useEffect } from 'react';
import HeaderContainer from '../components/header';
import { Container, Fab } from 'native-base';
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "../components/Carousel";
import displayLoading from "../components/loading";

import Axios from 'axios';


const images = [
  require("../images/sl1.jpg"),
  require("../images/sl2.jpg"),
  require("../images/sl3.jpg"),
  require("../images/sl4.jpg"),
];

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default function MainHome({ navigation }) {

    const [data, setdata] = React.useState([])


    Axios.get("https://coronavirus-19-api.herokuapp.com/countries/cameroon",
      {
        headers: { 'content-type': 'application/json' },
      }
    ).then(({ data }) => {
      if(data != undefined){
        var v = Object.values(data);
        console.log(v);
        setdata(v);
      }
    }).catch((err) => {
      alert(err);
    })
  
  return (
    <Container>
      <HeaderContainer navigation={navigation} />
      <View style={styles.Carousel}>
        <Carousel images={images} />
      </View>
      <View style={styles.statistique}>
        {displayLoading() }
        <View >
          <Text style={styles.casActif}>  {data[1] ==  undefined ? "veillez activer votre connexion internet" : data[1] + " Cas totaux" }  </Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: deviceWidth * 0.1, padding: deviceWidth * 0.02, }}>
            <View>
                <Text>{data[5] == undefined ? " " : data[5] + " Guéris"}  </Text> 
            </View>
            <View>
                <Text style={{marginLeft: deviceWidth * 0.3}}>{data[3] == undefined ? " " : data[3] + " Morts"} </Text>
            </View>
        </View>
      </View>
    </Container>

  );
}

const styles = StyleSheet.create(
  {

    Carousel: {
      height: 200,
      flex: 4,
    },

    casActif: {
      fontWeight: "bold",
      marginVertical: deviceWidth * 0.04,
      textAlign: "center",
      fontSize: 25,
    },

    statistique: {
      flex: 1,
      margin: 5,
      borderRadius: 3,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 2,
    }

  }
)  
