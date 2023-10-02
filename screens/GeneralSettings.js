import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { INPUT_BACK_CLR } from '../utils/Styles';
import { Button } from '@rneui/base';

const GeneralSettings = () => {

  const [focused, setFocused] = useState({status: false, name: ''});

  return (
    <View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.title}>General Settings</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'name' ? 'blue' : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'name'})}
        />
        <TextInput
          placeholder="Email"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'email'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'email'})}
        />
        <TextInput
          placeholder="Phone no."
          keyboardType='numeric'
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'phone'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'phone'})}
        />
      </View>
      <View>
        <Button title={'Update'} containerStyle={{width:'95%',alignSelf:'center'}} buttonStyle={{borderRadius:5,height:48}}/>
      </View>
    </View>
  )
}

export default GeneralSettings

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