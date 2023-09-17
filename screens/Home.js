import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHome from './TabScreens/TabHome';
import ExpenceSettingsPage from './TabScreens/ExpenceSettingsPage';
import Profile from './TabScreens/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomTabHeader from '../components/CustomTabHeader';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{header:()=><CustomTabHeader/>}}>
      <Tab.Screen
        name="AppHome"
        component={TabHome}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Entypo name="home" color={color} size={size} />
            ) : (
              <AntDesign name="home" color={color} size={size} />
            ),
            headerShown:true
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ExpenceSettingsPage}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Ionicons name="speedometer" color={color} size={size} />
            ) : (
              <Ionicons name="speedometer-outline" color={color} size={size} />
            ),
            headerShown:true
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <FontAwesome name="user" color={color} size={size} />
            ) : (
              <FontAwesome name="user-o" color={color} size={size} />
            ),
            headerShown:true
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
