import React from 'react';
import {TouchableOpacity, style} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

function Propos({navigation}){
    return (
    <Container>
      <Header>
            <TouchableOpacity style={{marginTop:10, flexDirection:"row"}} onPress={()=> navigation.goBack()}>
                <Icon name='arrow-back' style={{color:"#ffffff", marginTop:2}} /> 
                <Text style={{color:"#ffffff", marginTop:5,fontWeight:"bold", marginRight:110}}>  A-propos de Dome-Protect</Text>
            </TouchableOpacity>
      </Header>
      <Content>
        <Text>  propos </Text>
      </Content>
    </Container>
     /*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Localisation</Text>
      </View> */
    );
}


  
export default  Propos;