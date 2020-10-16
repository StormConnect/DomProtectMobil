import React,{Component}  from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

// Inside of a component's render() method:
export default function  Scrol() {
    return (
        <HeaderImageScrollView
         maxHeight={300}
         minOverlayOpacity={0}
         maxOverlayOpacity={0}
         headerImage={require("../images/sl1.jpg")}
         renderForeground={() => (
            <View style={{ height: 50, justifyContent: "center", alignItems: "center" }} >
            <TouchableOpacity  onPress={() => console.log("tap!!")}>
                <Text style={{backgroundColor: "transparent" }}>Tap Me!</Text>
            </TouchableOpacity>
            </View>
        )}
        >
            
        </HeaderImageScrollView>
    );
} 