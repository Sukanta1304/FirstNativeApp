import { StyleSheet, Text, View,useColorScheme,Dimensions } from 'react-native'
import React from 'react'

const {height,width}= Dimensions.get('window');

const TabHome = () => {
 
  return (
    <View style={styles.container}>
      <Text>TabHome</Text>
    </View>
  )
}

export default TabHome

const styles = StyleSheet.create({
  container:{
    width: width,
  }
})