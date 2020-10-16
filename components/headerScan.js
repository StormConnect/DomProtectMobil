import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet, Image } from 'react-native';

export default function HeaderScan({navigation}){

    return (
        <Header style={styles.Header}>
            <Title style={styles.text}>SCANNER LE CODE</Title>
          <Right/>
        </Header>
    );
  
}

const styles = StyleSheet.create({
  Header:{
    marginTop:10,
    textAlign:"center",
    justifyContent:"center"
  },

  text:{
    fontSize:12,
    fontWeight:"bold",
    marginTop:30,
    marginLeft:110
  }

})