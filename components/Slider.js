import React, { Component } from 'react';
import { StyleSheet,  View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { HomeGrid } from './HomeGrid';

export default class Slider extends Component {
    
    constructor() {
        super();
        this.state = {
        images: [
            require('./images/icone.jpg'),
            require('./images/icone.jpg'),
            require('./images/icone.jpg'),
            require('./images/icone.jpg'),
        ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SliderBox
                    images= { {uri: this.state.images } }
                    sliderBoxHeight={400}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                />
                <HomeGrid />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });