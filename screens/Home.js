import * as React from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Localisation from './Localisation';
import Qrcode from './Qrcode';
import Evaluation from './Evaluation';
import MainHome from './MainHome';



const Tab = createBottomTabNavigator();
function HomeScreen(){
    return (
        <Tab.Navigator screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => { 
              let iconName;
           
              if (route.name === 'Home') {
                 iconName = focused ? 'ios-home' : 'ios-home';
              }
              else if (route.name === 'Localisation') {
                iconName = focused ? 'md-map' : 'md-map';
              }
              else if (route.name == 'Qrcode'){
                iconName = focused ? 'md-qr-scanner' : 'md-qr-scanner';
              }
              else if (route.name == 'Evaluation') {
                iconName = focused ? 'md-person' : 'md-person';
              }
              <ion-icon name="scan-sharp"></ion-icon>
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#165BC0',
            inactiveTintColor: 'black',  
          }}
        >
          <Tab.Screen name="Home" component={MainHome} options={{title: 'Acceuil'}}/>
          <Tab.Screen name="Localisation" component={Localisation} options={{title: 'Localisation'}}/>
          <Tab.Screen name="Qrcode" component={Qrcode} options={{title: 'Qrcode'}}/>
          <Tab.Screen name="Evaluation" component={Evaluation} options={{title: 'Evaluation'}}/>
        </Tab.Navigator>
    );
}

export default HomeScreen;