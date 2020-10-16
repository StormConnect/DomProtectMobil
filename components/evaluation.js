import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderContainer from '../components/header';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

function  Evaluation({navigation}){
    return(

      <Container>
        <HeaderContainer navigation={navigation} />
      <Content>
        <View style={styles.hr}></View>
        <Text>
          EVALUATION
        </Text>
      </Content>
    
      </Container>
      /*
      <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Profile!</Text>
      </View>*/
    )
  }


  const styles = StyleSheet.create({
    hr:{
      color:"red",
      width:100,
      height:2,
    }
  })

export default Evaluation ;