import React, { useState } from 'react';
import {View, Text, ActivityIndicator, StyleSheet } from 'react-native';



export default function displayLoading(){

    const [isLoading , setIsloading] = useState(false);

    if (isLoading) {
        return(
            <View style={Styles.loading_container}>
                <ActivityIndicator size='large' />

            </View>
        )
    }
}

const styles = StyleSheet.create({

    loading_container:{
        position:'absolute',
        left: 0,
        right:0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent:'center'
    }
})
