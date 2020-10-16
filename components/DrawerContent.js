import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {Image, View, StyleSheet, Share } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button, Icon, Text } from 'native-base';
import * as WebBrowser from 'expo-web-browser';
import { AuthContext } from './Context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

export default function DrawerContent({ props , navigation}) {

    
  const { auth: { logout } } = React.useContext(AuthContext);

    const Help= async ()=>{
        await WebBrowser.openBrowserAsync('https://domeprotech.cm')
    }

    const Propos= async ()=>{
        await WebBrowser.openBrowserAsync('https://domeprotech.cm')
        //name='ios-color-palette'
    }

    const Partager = async ()=>{
        try {
            const result = await Share.share({
                message:
                    "Nalf-Nagato && Utek vous présentent leur Application d'aide à la lutte contre le Covid-19 Télecharger sur le site a l'adresse suivante 'https://dome-protect.cm'",
            });
        } catch (error) {
            alert(error.message);
        }
    }

   // const drawerdata=AsyncStorage.getItem('membre')

    return (
        <DrawerContentScrollView>

            <Content style={styles.header}> 
                <Image source={require("../images/icone1.jpg")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Nalf-nagato{/*drawerdata.user_base[1]*/} </Text>
                <Text style={{color:"gray", marginBottom:10}}>Nalf@gmail.com</Text>
            </Content>
            <View style={styles.sidebarDivider}></View>

            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} onPress={()=>navigation.navigate("Home")}>
                <Icon name="home" style={styles.icone} /> 
                <Text style={styles.text}>Accueil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} onPress={()=>navigation.navigate("Parametre")}>
                <Icon name='settings' style={styles.icone} /> 
                <Text style={styles.text}>Paramètre</Text>
            </TouchableOpacity>
            <View style={styles.sidebarDivider}></View>

            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} onPress={()=>navigation.navigate("Notification")}>
                <Icon name='md-notifications' style={styles.icone} /> 
                <Text style={styles.text}>Notification</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}}>
                <Icon name='archive' style={styles.icone} /> 
                <Text style={styles.text}>Suivi médical</Text>
            </TouchableOpacity>
            <View style={styles.sidebarDivider}></View>

            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} onPress={()=>Propos()}>
                <Icon name='ios-create' style={styles.icone} /> 
                <Text style={styles.text}>A propos</Text>
            </TouchableOpacity>
 
            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} onPress={()=>Partager()}>
                <Icon name='share' style={styles.icone} /> 
                <Text style={styles.text}>Partager</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} onPress={()=>Help()} >
                <Icon  name="help-circle" style={styles.icone} /> 
                <Text style={styles.text} >Aide</Text>
            </TouchableOpacity>
            <View style={styles.sidebarDivider}></View>

            <TouchableOpacity style={{marginLeft:10, flexDirection:"row"}} 
            onPress={()=>logout()}>
                <Icon  name="log-out" style={styles.icone} /> 
                <Text style={styles.text} >Déconexion</Text>
            </TouchableOpacity>

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    icone:{
        fontSize:20,
        fontWeight:"normal",
        margin:10,
    },

    text:{
        margin:10,
        fontSize:16,
        color:"grey",
        fontWeight:"bold"
    },  

    profileImg:{
        width:80,
        height:80,
        borderRadius:40,
        marginTop:20
    },

    header:{
        marginLeft:15,
    },

    sidebarDivider:{
        height:1,
        width:"100%",
        marginTop: 0 ,
        backgroundColor:"lightgray",
        marginVertical:10
    },

})