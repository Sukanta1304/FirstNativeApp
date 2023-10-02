import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { INPUT_BACK_CLR } from '../utils/Styles';
import { Button } from '@rneui/base';

const AddExpence = () => {

  const [focused, setFocused] = useState({status: false, name: ''});

  return (
    <View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.title}>Add a New Expence</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Amount"
          keyboardType='number-pad'
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'amount' ? 'blue' : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'amount'})}
        />
        <TextInput
          placeholder="Purpose"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'purpose'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'purpose'})}
        />
         <TextInput
          placeholder="Expence Date"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'date'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'date'})}
        />
      </View>
      <View>
        <Button title={'Add'} containerStyle={{width:'95%',alignSelf:'center'}} buttonStyle={{borderRadius:5,height:48}}/>
      </View>
    </View>
  )
}

export default AddExpence

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