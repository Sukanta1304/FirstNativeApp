import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { INPUT_BACK_CLR } from '../utils/Styles';
import { Button } from '@rneui/base';

const PasswordSettings = () => {

  const [focused, setFocused] = useState({status: false, name: ''});

  return (
    <View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.title}>Password Settings</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Old Password"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'oldpass' ? 'blue' : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'oldpass'})}
        />
        <TextInput
          placeholder="New Password"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'newpass'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'newpass'})}
        />
        <TextInput
          placeholder="Confirm New Password"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'confirmpass'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'confirmpass'})}
        />
      </View>
      <View>
        <Button title={'Update Password'} containerStyle={{width:'95%',alignSelf:'center'}} buttonStyle={{borderRadius:5,height:48}}/>
      </View>
    </View>
  )
}

export default PasswordSettings

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