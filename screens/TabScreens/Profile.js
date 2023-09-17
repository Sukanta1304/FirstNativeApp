import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../assets/styles/GlobalStyles';
import { ListItem } from '@rneui/themed';

const {height, width} = Dimensions.get('window');

const Profile = () => {
  const list = [
    {
      name: 'General Settings',
      icon: require('../../assets/images/settings.jpg')
    },
    {
      name: 'Password Settings',
      icon: require('../../assets/images/password_change.png')
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
      </View>
      <View>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Image source={item.icon} style={{width:50,height:50,resizeMode:'contain'}}/>
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
    // backgroundColor:'purple'
  },
});
