import React from 'react';
import {TouchableOpacity, StyleSheet, View, Dimensions} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

function Historique({navigation}) {
    return (
    <Container>
      <Header style={{backgroundColor:"#165BC0"}}>
            <TouchableOpacity style={{marginTop: Dimensions.get('window').width * 0.03 , flexDirection:"row"}} Title="Go back" onPress={()=> navigation.goBack()}>
                <Icon name='arrow-back' style={{color:"#ffffff", marginTop: Dimensions.get('window').width * 0.01 }} /> 
                <Text style={{color:"#ffffff" , marginTop: Dimensions.get('window').width * 0.02, fontWeight:"bold", marginRight:Dimensions.get('window').width * 0.4}}>  Historique des Tests</Text>
            </TouchableOpacity>
      </Header>

      <View style={styles.container}>
          <Button style={styles.btn}>
            <Text style={styles.Textbtn} >Actualiser</Text>
          </Button> 
      </View>

      <Content>
        <Text> Historique </Text>

      </Content>
    </Container>

    );
}

const styles = StyleSheet.create({
  container:{
    height:100,
    margin:10,
  },
  
  Textbtn:{
    fontWeight:'bold',
    color:"#fff",
    marginLeft:70
  },

  btn: {
    width: 250,
    height: 60,
    marginTop:15,
    alignSelf:"center",
    backgroundColor:'#165BC0',
    textTransform:"lowercase"
  },
})

export default  Historique;