import React from 'react';
import {TouchableOpacity,   StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Button, Content, Footer, FooterTab, Left, Right, Body, Icon, Text, View } from 'native-base';

function Notification({navigation}) {
    return (
    <Container>
      <Header style={{backgroundColor:"#165BC0"}}>
            <TouchableOpacity style={{marginTop: Dimensions.get('window').width * 0.03 , flexDirection:"row"}} Title="Go back" onPress={()=> navigation.goBack()}>
                <Icon name='arrow-back' style={{color:"#ffffff", marginTop: Dimensions.get('window').width * 0.01 }} /> 
                <Text style={{color:"#ffffff" , marginTop: Dimensions.get('window').width * 0.02, fontWeight:"bold", marginRight:Dimensions.get('window').width * 0.6}}>   Notification</Text>
            </TouchableOpacity>
      </Header>
      <View style={styles.container}>
          <Button style={styles.btn}>
            <Text style={styles.Textbtn} >Actualiser</Text>
          </Button> 
      </View>

      <Content>

      </Content>
    </Container>
     /*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Localisation</Text>
      </View> */
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
  
export default  Notification;