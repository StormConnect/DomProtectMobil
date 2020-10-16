import React,{useState, useEffect } from 'react';
import HeaderContainer from '../components/header';
import { StyleSheet, Image, Text, StatusBar, Dimensions} from 'react-native'; 
import {Container, Content , Button,} from 'native-base';


var deviceWidth = Dimensions.get('window').width ;
var deviceHeight =  Dimensions.get('window').height ;

function Qrcode({navigation}) {

    return (

      <Container style={styles.container}>
        <StatusBar hidden barStyle="dark-content" />
        <HeaderContainer navigation={navigation} />
        <Content>
          <Image  style={styles.stretch} source={require('../images/icone1.jpg')}/>
          <Text style={styles.styleText}>
            Verifier votre indice de cotation ou bien pour un autre individu !!
          </Text>
          <Button style={styles.btn} onPress={()=>navigation.navigate('ScanQr')}>
            <Text style={styles.Textbtn}> Scanner le QR code</Text>
          </Button> 
          <Button style={styles.btn1} onPress={()=>navigation.navigate('GenerateQr')}>
            <Text style={styles.Textbtn}>  Se faire Scanner </Text> 
          </Button>
        </Content>

      </Container>
    );
  }
    
  const styles = StyleSheet.create({
      styleText:{
        color: 'black',
        marginTop: Dimensions.get('window').width * 0.1, 
        width: Dimensions.get('window').width - 60,
        fontSize:15,
        marginLeft:Dimensions.get('window').width * 0.1,
        fontWeight: 'bold',
        marginBottom:Dimensions.get('window').height *0.04,
      },

      stretch: {
        marginTop: deviceWidth * 0.1,
        alignContent: 'center',
        alignSelf:"center",
        alignItems: 'center',
        borderBottomWidth:2,
        borderColor:'pink',
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height - 400,
        resizeMode: 'stretch',
      },

      btn: {
        width: Dimensions.get('window').width - 60,
        alignSelf:"center",
        backgroundColor:'#165BC0',
        textAlign:"center"
      },

      Textbtn:{
        textAlign:"center",
        fontWeight:'bold',
        textTransform:"uppercase",
        color:"#fff",
        marginLeft: Dimensions.get('window').width * 0.2,
      },

      btn1: {
        width: Dimensions.get('window').width - 60,
        marginTop: Dimensions.get('window').width * 0.06,
        textAlign:"center",
        backgroundColor:'#165BC0',
        //height: 50,
        alignSelf:"center",
        alignItems: 'center',
      },
  })

export default  Qrcode; 