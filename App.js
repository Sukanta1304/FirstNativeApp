import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {SafeAreaView,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Home from './screens/Home';
import { UserContextProvider } from './context/UserContext';

const Stack = createStackNavigator();

function App() {

  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <UserContextProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
