import React from 'react';
import {Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet, Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width ;
var deviceHeight =  Dimensions.get('window').height ;

export default function HeaderContainer({navigation}){

    return (
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={()=>navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left> 
          <Body>
            <Title style={{fontWeight:"bold"}}>DomProtect</Title>
          </Body>
          <Right/>
        </Header>
    );
}

const styles = StyleSheet.create({
  Header:{
    marginTop:deviceWidth * 0.02,
    marginLeft: deviceWidth * 0.01,
    backgroundColor:"#165BC0"
  }
})