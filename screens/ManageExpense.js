import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { INPUT_BACK_CLR } from '../utils/Styles';
import { Button } from '@rneui/base';

const ManageExpense = () => {

  return (
    <View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.title}>You can View Expence List Here. You can also edit them</Text>
      </View>
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: INPUT_BACK_CLR,
  },
  title:{
    fontSize: 25,
    fontWeight: '800',
    color: 'blue',
    padding: 10,
    marginTop: 15,
  }
})