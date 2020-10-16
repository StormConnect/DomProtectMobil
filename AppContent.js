import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';


import DrawerContent from './components/DrawerContent';
import HomeScreen from './screens/Home';
import ScanQr from './screens/ScanQr';
import Parametre from './screens/Parametre';
import GenerateQr from './screens/GenerateQr';
import Historique from './screens/Historique';
import Message from './screens/Message';
import Notification from './screens/Notification';
import Propos from './screens/Propos';
import { StatusBar } from 'react-native';
import Inscription from './screens/Inscription';
import Login from './screens/Login';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth } from './components/hooks/useAuth';
import { AuthContext } from './components/Context/AuthContext'


export default function AppContent({ navigation }){
  const Drawer = createDrawerNavigator();
  //const Tab = createBottomTabNavigator();

  const Stack = createStackNavigator();
  //creation d'un menu pour gerer ma navigation

  const { auth, state } = useAuth();
  NetInfo.addEventListener(state => {
    if (!(state.isInternetReachable == true)) {
      alert("Veillez vous connecter a internet pour pouvoir continuer la navigation !!!") ;
    }
  /*  else{
      console.log('Connection valide');
    }*/
  });


  return (
    <AuthContext.Provider value={{ auth, membre: state.membre,token: state.token }}>
      <NavigationContainer>
        <StatusBar hidden barStyle="dark-content" />

        {state.membre == null ? (
            <Stack.Navigator>
              <Stack.Screen name=" " component={Login}  />
              <Stack.Screen name="Inscription" component={Inscription} />
            </Stack.Navigator>
        ) : (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name='home' component={HomeScreen} />
              <Drawer.Screen name='ScanQr' component={ScanQr} />
              <Drawer.Screen name='Parametre' component={Parametre} />
              <Drawer.Screen name='GenerateQr' component={GenerateQr} />
              <Drawer.Screen name='Historique' component={Historique} />
              <Drawer.Screen name='Message' component={Message} />
              <Drawer.Screen name='Notification' component={Notification} />
              <Drawer.Screen name='Propos' component={Propos} />
            </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}