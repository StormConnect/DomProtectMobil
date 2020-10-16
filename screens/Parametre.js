import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Switch, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import ModalLang from '../components/ModalLang';
import * as Location from 'expo-location';




/*let text = 'Waiting..';
if (errorMsg) {
  text = errorMsg;
} else if (location) {
  text = JSON.stringify(location);
}
console.log({text});*/



function Parametre({navigation}) {

  /** Fonction Position géographique de l'utilisateur */
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const Position = async ()=>{
    let locat = await Location.getCurrentPositionAsync({});
    setLocation(locat);
    //alert(locat);
  }

  React.useEffect(() =>{
    (async () =>{
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      if (isEnabled) {
        Position();
      }
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  //console.log({text});
  /**End Fonction position */
  
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);


  /**Variable Modal */
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <Container style={{backgroundColor:"#8080"}}>
        <Header style={{backgroundColor:"#165BC0"}}>
              <TouchableOpacity style={{marginTop: Dimensions.get('window').width * 0.03 , flexDirection:"row"}} Title="Go back" onPress={()=> navigation.goBack()}>
                  <Icon name='arrow-back' style={{color:"#ffffff", marginTop: Dimensions.get('window').width * 0.01 }} /> 
                  <Text style={{color:"#ffffff" , marginTop: Dimensions.get('window').width * 0.02, fontWeight:"bold", marginRight:Dimensions.get('window').width * 0.6}}>   Paramètre</Text>
              </TouchableOpacity>
        </Header>
        <View style={styles.containerHeader}>
          <Text style={{color:"#165BC0", margin:7, fontWeight:"bold"}}>Mon Compte</Text>
          <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}}  >
                <Icon  name="md-mail" style={styles.icone} /> 
                <Text style={styles.text} >NagorFonkoua@gmail.com</Text>
          </TouchableOpacity>
          <View style={styles.sidebarDivider}></View>
          <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}}>
                <Icon  name="md-person" style={styles.icone} /> 
                <Text style={styles.text} >Nalf-Nagato</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.containerBody}>
          <Text style={{color:"#165BC0", margin:7, fontWeight:"bold"}}>Paramètre</Text>
          <View style={{margin:10, flexDirection:"row"}}  >
              <Icon  name="map" style={styles.icone} /> 
              <Text style={styles.text} >Désactiver ma géolocalisation</Text>
              <Switch trackColor={{false: "#165BC0", true: "black"}} 
               thumbColor={isEnabled1 ? "red" : "#f4f3f4"} 
               ios_backgroundColor="#8080"
               onValueChange={toggleSwitch} 
               value={isEnabled}
                style={{marginLeft:Dimensions.get('window').width * 0.05, justifyContent:"center", marginRight:Dimensions.get('window').width * 0.1}}/>
          </View>
          <View style={styles.sidebarDivider}></View>

          <View style={{margin:10, flexDirection:"row"}}  >
              <Icon  name="md-notifications" style={styles.icone} /> 
              <Text style={styles.text} >Désactiver les notifications </Text>
              <Switch trackColor={{false: "#165BC0", true: "black"}} 
              thumbColor={isEnabled1 ? "red" : "#f4f3f4"} 
              ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch1} 
              value={isEnabled1}  style={{marginLeft:Dimensions.get('window').width * 0.1}}/>
          </View> 
          <View style={styles.sidebarDivider}></View>

          <View style={{margin:10, flexDirection:"row"}}  >
              <Icon  name="language" style={styles.icone} /> 
              <ModalLang/>
          </View>
          <View style={styles.sidebarDivider}></View>

          <TouchableOpacity style={{margin:10, flexDirection:"row"}}  >
              <Icon  name="security" style={styles.icone} /> 
              <Text style={styles.text} >Sécurité</Text>
          </TouchableOpacity>
          <View style={styles.sidebarDivider}></View>
        </View>
      </Container>

    );
}

const styles = StyleSheet.create({
  containerHeader:{
    height:140,
    backgroundColor:"#fff"
  },

  containerBody:{
    marginTop:10,
    backgroundColor:"#fff",
    height:600
  },

  sidebarDivider:{
    height:1,
    width:"100%",
    marginTop: 0 ,
    backgroundColor:"lightgray",
   // marginVertical:0,
    marginLeft:60
  },

  icone:{
    fontSize:20,
    fontWeight:"normal",
    margin:10,
  },

  text:{
    margin:10,
    fontSize:15,
    color:"grey",
    fontWeight:"bold"
  },  

  

})
  
  
export default  Parametre;
