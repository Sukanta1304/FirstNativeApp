import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {INPUT_BACK_CLR} from '../utils/Styles';
import {Button} from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signup = ({navigation}) => {
  const [focused, setFocused] = useState({status: false, name: ''});

  // console.log(focused);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.loginTitleText}>Create Account</Text>
        <Text style={styles.welComeText}>
          Create an account so you can enjoy all the features seamlessly.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'email' ? 'blue' : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'email'})}
        />
        <TextInput
          placeholder="Password"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'password'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'password'})}
        />
        <TextInput
          placeholder="Confirm Password"
          style={[
            styles.inputStyle,
            {
              borderColor:
                focused && focused.name === 'cnfpassword'
                  ? 'blue'
                  : INPUT_BACK_CLR,
            },
          ]}
          onFocus={() => setFocused({status: true, name: 'cnfpassword'})}
        />
      </View>
      <View
        style={{
          width: '95%',
          paddingBottom: 10,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text style={styles.forgotTextClr}>Forgot your password?</Text>
      </View>
      <View>
        <Button title={'Sign In'} containerStyle={{width:'95%',alignSelf:'center'}} buttonStyle={{borderRadius:5,height:48}}/>
      </View>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Login')}
        style={{padding: 10, justifyContent: 'center', alignItems: 'center',height:48,marginTop:20}}>
        <Text style={styles.newAccText}>Already have an account</Text>
      </TouchableOpacity>
      <View
        style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.forgotTextClr,{marginVertical:15}]}>Or continue with</Text>
        <View>
          <Image
            source={require('../assets/images/google-icon.png')}
            style={styles.googleIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
  },
  container: {
    alignItems: 'center',
  },
  googleIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  loginTitleText: {
    fontSize: 25,
    fontWeight: '800',
    color: 'blue',
    padding: 10,
    marginTop: 15,
  },
  welComeText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
  },
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
  forgotTextClr: {
    fontSize: 14,
    fontWeight: '800',
    color: 'blue',
  },
  newAccText:{
    fontSize:18,
    color:'black',
    fontWeight:'500',
  },
});
