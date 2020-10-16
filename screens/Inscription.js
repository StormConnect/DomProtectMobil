import React from 'react';
import HeaderContainer from '../components/header';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Picker } from 'native-base';
import { StyleSheet, View, TextInput,ScrollView, Image, TouchableOpacity} from 'react-native';

function  Inscription({navigation}){

  return (
    <Container> 
      
      <View style={styles.body}>
          <View style={styles.Head}>
              <Text style={styles.Logo}>Dome-Protech</Text>
          </View>

              <View style={styles.sectionFrom} >
                    <View style={styles.contentInput}>
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Icon name="name" color="red" styles={{fontSize:5}} />
                        </View>
                        <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 16, }}
                            placeholder='Nom'
                            keyboardType='text'
                          />
                    </View>
              </View>

              <View style={styles.sectionFrom} >
                    <View style={styles.contentInput}>
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Icon name="ios-mail" color="red" styles={{fontSize:5}} />
                        </View>
                        <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 16, }}
                            placeholder='Prenom'
                            keyboardType='text'
                          />
                    </View>
              </View>

              <View style={styles.sectionFrom} >
                    <View style={styles.contentInput}>
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Icon name="ios-mail" color="red" styles={{fontSize:5}} />
                        </View>
                        <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 16, }}
                            placeholder='Email Ex:nom@gmail.com'
                            keyboardType='text'
                          />
                    </View>
              </View>

              <View style={styles.sectionFrom} >
                    <View style={styles.contentInput}>
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Icon name="lock" color="red" styles={{fontSize:5}} />
                        </View>
                        <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 16, }}
                            placeholder='mots de passe '
                            keyboardType='text'
                            secureTextEntry
                          />
                    </View>
              </View>

              <View style={styles.sectionFrom}  >
                    <View style={styles.contentInput}>
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Icon name="lock" type="Ionicons" />
                        </View>
                        <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 16, }}
                            placeholder='Confirmation du mots de passe'
                            keyboardType='text'
                            secureTextEntry
                          />
                    </View>
              </View>

              <Button style={styles.btn}>
                <Text style={styles.Textbtn} >Inscription</Text>
              </Button> 
   

      </View>

    </Container>
  );
}

const styles = StyleSheet.create({
  Head:{
    height:30,
    marginVertical:20
  },

  Logo:{
    textAlign:"center",
    justifyContent:"center",
    fontSize:30,
    fontWeight: "bold",
    color: "#165BC0",
  },

  Inscription:{
    textAlign:"center",
    marginTop:3,
    color:"black",
  },

  container:{
    backgroundColor:"red"
  },

  body:{
    backgroundColor:"#eeeeee",
    flex:1,
    margin:10,
    padding:0,
    marginVertical:70,
    borderRadius:5,
  },

  contenerForm:{
    marginHorizontal:10,
  },

  Textbtn:{
    fontWeight:'bold',
    color:"#fff",
    fontSize:20,
    marginLeft:90,
  },

  btn: {
    height: 60,
    marginTop:5,
    width:"100%",
    borderRadius:2,
    backgroundColor:'#165BC0',
    textTransform:"lowercase"
  },

  label:{
    color: 'black', 
    fontWeight:"bold",
    fontSize: 20, 
    marginLeft: 5 
  },

  sidebarDivider:{
    height:2,
    width:"100%",
    backgroundColor:'#165BC0',
  },

  contentInput:{ borderColor: 'black', borderWidth: 1, flexDirection: 'row', borderRadius: 9 },
  sectionFrom:{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', }
})


export default Inscription;
