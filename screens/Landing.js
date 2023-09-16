import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Landing = ({navigation}) => {
  return (
    <View>
      <Button title='Go to Home' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})