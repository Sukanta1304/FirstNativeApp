import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {SafeAreaView,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Home from './screens/Home';
import { UserContextProvider } from './context/UserContext';
import SetTarget from './screens/SetTarget';
import AddExpence from './screens/AddExpence';
import ManageExpense from './screens/ManageExpense';
import GeneralSettings from './screens/GeneralSettings';
import PasswordSettings from './screens/PasswordSettings';
import Login from './screens/Login';
import Signup from './screens/Signup';

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
      <Stack.Screen name="Login" component={Login} options={{headerShown:true}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:true}}/>
      <Stack.Screen name="Set Target" component={SetTarget} options={{headerShown:true}}/>
      <Stack.Screen name="Add Expence" component={AddExpence} options={{headerShown:true}}/>
      <Stack.Screen name="Manage Expence" component={ManageExpense} options={{headerShown:true}}/>
      <Stack.Screen name="General Settings" component={GeneralSettings} options={{headerShown:true}}/>
      <Stack.Screen name="Password Settings" component={PasswordSettings} options={{headerShown:true}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
