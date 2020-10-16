import React, { Component,useState, useEffect } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Icon, Header} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function GenerateQr({navigation}) {

    const  [inputValue , setInputValue] = useState(null);
    const  [valueForQrCode, setValueForQrCode] = useState(null);

    const  getTextInputValue = () => {
      setValueForQrCode(inputValue) ;
    };

    const [qrp,setqrp]=React.useState({
        nom:'2',
    })
    return (
      <View style={styles.MainContainer}>
        <QRCode
          //QR code value
          value={valueForQrCode ? valueForQrCode: JSON.stringify(qrp) }  
          //size of QR Code
          size={300}
        />
        
        {/**
         *   <TextInput
                  style={styles.TextInputStyle}
                  onChangeText={text =>setInputValue(text)}
                  underlineColorAndroid="transparent"
                  placeholder="Enter text to Generate QR Code"
              /> 
         */}

        <TouchableOpacity
          onPress={()=> getTextInputValue()}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style = {styles.TextStyle}>Actualiser votre QR Code</Text>
        </TouchableOpacity>
      </View>
    );
}

export default GenerateQr;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 150,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor:"#165BC0",
    //backgroundColor: '#F44336',
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});