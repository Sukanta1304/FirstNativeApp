import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../assets/styles/GlobalStyles';
import {ListItem} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather'

const {height, width} = Dimensions.get('window');

const Profile = ({navigation}) => {
  const list = [
    {
      name: 'General Settings',
      icon: require('../../assets/images/settings.jpg'),
      onpress: () => navigation.navigate('General Settings'),
    },
    {
      name: 'Password Settings',
      icon: require('../../assets/images/password_change.png'),
      onpress: () => navigation.navigate('Password Settings'),
    },
  ];

  return (
    <View>
      <Text style={GlobalStyles.title}>Profile</Text>
      <View style={styles.imagenDetailsContainer}>
        <Image
          source={require('../../assets/images/user.png')}
          style={{
            width: width / 2,
            height: height / 4,
            resizeMode: 'contain',
            borderRadius: width / 2,
          }}
        />
        <Feather name='camera' size={30} color={'black'} style={styles.cameraIcon}/>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Name</Text>
      </View>
      <View>
        {list.map((item, i) => (
          <ListItem key={i} onPress={item.onpress} style={styles.listItemContainer}>
            <Image
              source={item.icon}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenDetailsContainer: {
    width: width,
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    // borderWidth:1
    // backgroundColor:'purple'
  },
  listItemContainer: {
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  cameraIcon:{
    position:'absolute',
    right:'22%',
    top:'42%'
  },
  nameContainer:{
    padding:10,
    margin:10
  },
  name:{
    fontSize:18,
    fontWeight:'800',
    color:'black',
  }
});
