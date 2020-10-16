import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";

class ApiContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            lading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            axiosData: null
        };
    }

    goForFetch = () =>{
        this.setState({
            fromFetch: true,
            loading: true,
        })
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson)    => {
               console.log('getting data from fetch', responseJson)
               setTimeout(() => {
                   this.setState({
                       loading: false,
                       dataSource: responseJson
                   })
               }, 2000)
            })
            .catch(error => console.log(error))
    }
}