import * as React from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import Localisation from './screens/Localisation';
import Qrcode from './screens/Qrcode';
import Evaluation from './screens/Qrcode';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => { 
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }
            else if (route.name === 'Localisation') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name == 'Qrcode') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name == 'Evaluation') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Acceuil' }}/>
        <Tab.Screen name="Localisation" component={Localisation} options={{title: 'Localisation'}}/>
        <Tab.Screen name="Qrcode" component={Qrcode} options={{title: 'Qrcode'}}/>
        <Tab.Screen name="Evaluation" component={Evaluation} options={{title: 'Evaluation'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
