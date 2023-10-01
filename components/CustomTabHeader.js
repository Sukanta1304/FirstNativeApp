import {Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const {height,width}= Dimensions.get('window');

const CustomTabHeader = () => {

    const navigation = useNavigation();

    const handleNavigate=(path)=>{
        navigation.navigate(path)
    };

  return (
    <View>
        <View style={styles.container}>
        <View>
            <Image source={require('../assets/images/app_logo.png')} style={{width:50,height:50,resizeMode:'contain'}}/>
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Login' buttonStyle={{backgroundColor:'purple'}} onPress={()=>handleNavigate('Login')}/>
            <Button title='Signup'buttonStyle={{backgroundColor:'blue'}} onPress={()=>handleNavigate('Signup')}/>
        </View>
        </View>
    </View>
  )
}

export default CustomTabHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:width,
        flexWrap:'wrap',
        padding:10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:10
    }
})