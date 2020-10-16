import React from 'react'
import { StyleSheet, Text, View, Picker, Modal, TouchableHighlight, TextInput, ScrollView, RefreshControl } from 'react-native'
import { Container, Content, Button, Icon, Spinner } from 'native-base'

import { useGet } from '../../../components/hooks/useGet'

import { useGetAccount } from '../../../components/hooks/useGetAccount'

import axios from 'axios'

import { BASE_URL } from '../../../components/Config/index'


import { Formik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../../components/Context/AuthContext'

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Register = ({ navigation }) => {

    const { auth: { inscrit }, } = React.useContext(AuthContext);



    const [selectedndc, setSelectedndc] = React.useState("5");
    const [selectedpays, setSelectedpays] = React.useState("cm");

    const [Token, setToken] = React.useState([]);

    const getToken = () => {
        axios.post(`${BASE_URL}/get-token/`, {
            id_membre: "R46iMh8C",
            mdp: '123456789',
        })
            .then(({ data }) => {
                setToken(data);
            })
    }




    const setMember = ({ values }) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                getToken()
                if (!Token.success) {

                    reject(new Error("Verifier votre mot de passe."));
                } else {


                    if (!inscrit(selectedpays, values.tel, values.memberpass, selectedndc, Token.results)) {
                        reject(new Error("You playin' with that fake email address."));
                    }


                }

                resolve(true);
            }, 4000);
        });
    return (
        <Container>
            <Content>
                <Formik
                    initialValues={{ memberpass: '', tel: '', password: '' }}
                    onSubmit={(values, actions) => {
                        setMember({ values }).then(() => {
                            /*  alert(JSON.stringify(values)); */
                        })
                            .catch(error => {
                                actions.setFieldError('general', error.message);
                            })
                            .finally(() => {
                                actions.setSubmitting(false);
                            });

                    }}
                    enableReinitialize
                >
                    {
                        (({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }) => (
                            <React.Fragment>

                                <View style={{
                                    margin: 20, backgroundColor: '#fff', justifyContent: 'center',
                                    alignContent: 'center', alignSelf: 'center', shadowOffset: {
                                        width: 0,
                                        height: 50,
                                    },
                                    shadowOpacity: 10.57,
                                    shadowRadius: 15.19,

                                    elevation: 50,
                                }}>



                                    <View style={{ backgroundColor: '#f0e9e9', justifyContent: 'center', alignContent: 'center', height: '100%' }}>
                                        <View style={{ backgroundColor: 'white', margin: 20, marginTop: 1, padding: 10, borderRadius: 10 }}>
                                            <View style={styles.modalView}>
                                                <View style={{
                                                    backgroundColor: '#5eba00', height: 50, borderTopRightRadius: 10, borderTopLeftRadius
                                                        : 10, justifyContent: 'center', alignContent: 'center'
                                                }}>
                                                    <Text style={{ fontSize: 18, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Demarrer la recharge</Text>

                                                </View>

                                                <View style={{ marginTop: 30 }}>

                                                <Text style={{ color: '#6495ed', fontSize: 20, marginLeft: 5 }}>Nombre de package</Text>

                                                    <View style={{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', borderColor: 'black', borderWidth: 1, borderRadius: 10 }}  >

                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                                                <Icon name="person-add" type="Ionicons" />
                                                            </View>
                                                            <Picker
                                                                mode='dropdown'

                                                                //  selectedValue={pseudo}
                                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                                placeholderIconColor="#007aff"
                                                                selectedValue={selectedndc}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedndc(itemValue)}

                                                                style={{ height: 50, width: '90%', marginLeft: 10, fontSize: 40 }}
                                                            //onValueChange={(itemValue, itemIndex) => setPseudo(itemValue)}
                                                            >

                                                                <Picker.Item label="5" value="5" />
                                                                <Picker.Item label="10" value="10" />
                                                                <Picker.Item label="15" value="15" />
                                                                <Picker.Item label="20" value="20" />
                                                                <Picker.Item label="25" value="25" />
                                                                <Picker.Item label="30" value="30" />
                                                                <Picker.Item label="55" value="35" />
                                                                <Picker.Item label="40" value="40" />
                                                                <Picker.Item label="45" value="45" />
                                                                <Picker.Item label="50" value="50" />
                                                                <Picker.Item label="55" value="55" />
                                                                <Picker.Item label="60" value="60" />
                                                                <Picker.Item label="65" value="65" />
                                                                <Picker.Item label="70" value="70" />
                                                                <Picker.Item label="75" value="75" />
                                                                <Picker.Item label="80" value="80" />
                                                                <Picker.Item label="85" value="85" />
                                                                <Picker.Item label="90" value="90" />
                                                                <Picker.Item label="95" value="95" />
                                                                <Picker.Item label="100" value="100" />

                                                            </Picker>
                                                        </View>

                                                    </View>


                                                    <View style={{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', }}  >

                                                        <Text style={{ color: '#6495ed', fontSize: 20, marginLeft: 5 }}>Mot de passe du membre</Text>
                                                        <View style={{ borderColor: 'black', borderWidth: 1, flexDirection: 'row', borderRadius: 9 }}>
                                                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                                                <Icon name="lock" type="Ionicons" />
                                                            </View>
                                                            <TextInput style={{
                                                                marginLeft: 5, marginRight: 20, marginTop: 5,
                                                                height: 60, width: '60%', padding: 10, fontSize: 15,
                                                            }}
                                                                placeholder='EX: *************  '
                                                                keyboardType='numeric'
                                                                onChangeText={handleChange("montant")}
                                                                onBlur={handleBlur("montant")} />
                                                        </View>


                                                    </View>
                                                    <Text style={{ color: '#6495ed', fontSize: 20, marginLeft: 5 }}>Pays du membre</Text>

                                                    <View style={{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', borderColor: 'black', borderWidth: 1, borderRadius: 10 }}  >

                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                                                <Icon name="book" type="Ionicons" />
                                                            </View>
                                                            <Picker
                                                                mode='dropdown'

                                                                //  selectedValue={pseudo}
                                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                                placeholderIconColor="#007aff"
                                                                selectedValue={selectedpays}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedpays(itemValue)}

                                                                selectedValue={selectedndc}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedndc(itemValue)}

                                                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                                            //onValueChange={(itemValue, itemIndex) => setPseudo(itemValue)}

                                                            >

                                                                <Picker.Item label="Cameroun" value="cm" />
                                                                <Picker.Item label="Bénin" value="BJ" />
                                                                <Picker.Item label="Côte d'ivoire" value="CI" />
                                                                <Picker.Item label="Mali" value="ML" />
                                                                <Picker.Item label="Gabon" value="GB" />
                                                                <Picker.Item label="Sénégale" value="SN" />
                                                                <Picker.Item label="Togo" value="TG" />
                                                            </Picker>
                                                        </View>

                                                    </View>

                                                    
                                                    <View style={{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', }}  >

                                                        <Text style={{ color: '#6495ed', fontSize: 20, marginLeft: 5 }}>Numéro du membre</Text>
                                                        <View style={{ borderColor: 'black', borderWidth: 1, flexDirection: 'row', borderRadius: 9 }}>
                                                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                                                <Icon name="call" type="Ionicons" />
                                                            </View>
                                                            <TextInput style={{
                                                                marginLeft: 5, marginRight: 20, marginTop: 5,
                                                                height: 60, width: '90%', padding: 20, fontSize: 15,
                                                            }}
                                                                placeholder='EX: 2376998575  '
                                                                keyboardType='numeric'
                                                                onChangeText={handleChange("tel")}
                                                                onBlur={handleBlur("tel")}/>
                                                        </View>


                                                    </View>
                                                                                            
                                                    <View style={{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', }}  >

                                                        <Text style={{ color: '#6495ed', fontSize: 20, marginLeft: 5 }}>Mot de passe</Text>
                                                        <View style={{ borderColor: 'black', borderWidth: 1, flexDirection: 'row', borderRadius: 9 }}>
                                                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                                                <Icon name="lock" type="Ionicons" />
                                                            </View>
                                                            <TextInput style={{
                                                                marginLeft: 5, marginRight: 20, marginTop: 5,
                                                                height: 60, width: '90%', padding: 20, fontSize: 15,
                                                            }}
                                                                placeholder='EX: ***********  '
                                                                
                                            
                                                                value={values.password}

                                                                keyboardType='name-phone-pad'
                                                                onChangeText={handleChange("password")}
                                                                onBlur={handleBlur("password")}
                                                                />
                                                        </View>


                                                    </View>


                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                                    {isSubmitting ?
                                                        (
                                                            <Spinner color='green' />
                                                        )
                                                        : (

                                                            <React.Fragment>
                                                                <Button style={{ ...styles.openButton, backgroundColor: "red", justifyContent: 'center' }}
                                                                    onPress={() => {
                                                                        navigation.goBack()
                                                                    }}
                                                                >
                                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 8 }}>Annuler</Text>

                                                                </Button>
                                                                <Button style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft: 12, justifyContent: 'center' }}
                                                                    onPress={handleSubmit}
                                                                >
                                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 8 }}>Valider L'inscription</Text>

                                                                </Button>
                                                            </React.Fragment>
                                                        )
                                                    }
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>



                            </React.Fragment>

                        ))
                    }
                </Formik>

            </Content>
        </Container>
    )
}

export default Register

const styles = StyleSheet.create({})
