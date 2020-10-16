import React from 'react';
import HeaderContainer from '../components/header';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Picker } from 'native-base';
import { StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../components/Context/AuthContext';
import Axios from 'axios';

import * as yup from 'yup'
import { Formik } from 'formik'
import { Fragment } from 'react';


function Login({ navigation }) {

  const { auth: { login } } = React.useContext(AuthContext);
  
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  /*
  function login(){
      Axios.post('https://utek.pythonanywhere.com/tekuv', {
          email: 'foo',
          password: 'bar',
    }).then(function(response) {
          // handle success
          response == true ? console.log("bingo") : console.log("nooo");;
          alert(JSON.stringify(response.data));
    }).catch(function(error) {
          console.log(error);
    });
  } */

  /*function con(){

      Axios.get('https://utek.pythonanywhere.com/tekuv', {
        email: 'foo',
        password: 'bar',
      }).then(function(response) {
          alert(response) ;
      }).catch(function(error) {
            alert(error);
      });
  } */

  return (
    <Container>

      <View style={styles.body}>
        <View style={styles.Head}>
          <Text style={styles.Logo}>DomProtect</Text>
        </View>

        <Content style={styles.contenerForm}>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {
              await sleep(500);
              login(values.email,values.password) 
            }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email()
                .required("email est obligatoire"),
              password: yup
                .string()
                .min(8,'votre mot de passe doit etre min 8 carractere')
                .required("le mot de passe est obligation"),
            })}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
              <Fragment>
                <View style={styles.sectionFrom} >
                  <View style={styles.contentInput}>
                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                      <Icon name="ios-mail" color="red" styles={{ fontSize: 5 }} />
                    </View>
                    <TextInput
                      style={{ marginLeft: 5, marginRight: 20, marginTop: 5, height: 40, width: '60%', padding: 10, fontSize: 16, }}
                      placeholder='Email Ex:nom@gmail.com'
                      keyboardType='default'
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                    />
                  </View>
                  {touched.email && errors.email &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                  }
                </View>

                <View style={styles.sectionFrom}  >
                  <View style={styles.contentInput}>
                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                      <Icon name="lock" type="Ionicons" />
                    </View>
                    <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5, height: 40, width: '60%', padding: 10, fontSize: 16, }}
                      placeholder='Mots de passe'
                      keyboardType='default'
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={()=>setFieldTouched('password')}
                      secureTextEntry
                    />
                  </View>
                  {
                    touched.password && errors.password &&
                     <Text style={{fontSize:10,color:'red'}}>{errors.password} </Text>
                  }
                </View>

                <Button style={styles.btn} 
                
                  disabled={!isValid}
                  onPress={handleSubmit}>
                  <Text style={styles.Textbtn} >Connexion</Text>
                </Button>
                
                <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
                  <Text style={styles.Inscription}> Je n'ai pas de compte Dome-Protech </Text>
                </TouchableOpacity>
              </Fragment>
            )}
          </Formik>
        </Content>
      </View>

    </Container>
  );
}

const styles = StyleSheet.create({
  Head: {
    height: 30,
    marginVertical: 70
  },

  Logo: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#165BC0",
  },

  Inscription: {
    textAlign: "center",
    marginTop: 3,
    color: "black",
  },

  container: {
    backgroundColor: "red"
  },

  body: {
    backgroundColor: "#eeeeee",
    flex: 1,
    margin: 10,
    padding: 0,
    marginVertical: 70,
    borderRadius: 5,
  },

  contenerForm: {
    marginHorizontal: 10,
  },

  Textbtn: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20,
    marginLeft: 80,
  },

  btn: {
    height: 60,
    marginTop: 5,
    width: "100%",
    borderRadius: 2,
    backgroundColor: '#165BC0',
    textTransform: "lowercase"
  },

  label: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5
  },

  sidebarDivider: {
    height: 2,
    width: "100%",
    backgroundColor: '#165BC0',
  },

  contentInput: { borderColor: 'black', borderWidth: 1, flexDirection: 'row', borderRadius: 9 },
  sectionFrom: { marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', }
})


export default Login;
