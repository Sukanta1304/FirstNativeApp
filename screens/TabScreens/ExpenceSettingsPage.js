import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';

const ExpenceSettingsPage = () => {
  const list = [
    {
      id: 1,
      name: 'Set target',
      icon: require('../../assets/images/set-expense-image.jpg'),
    },
    {
      id: 2,
      name: 'Add a new expence',
      icon: require('../../assets/images/add-new-expense.jpg'),
    },
    {
      id: 3,
      name: 'Manage existing expence',
      icon: require('../../assets/images/manage-existing-expense.jpg'),
    },
  ];
  return (
    <View>
      <Text style={GlobalStyles.title}>Set/add/edit your expence here</Text>
      <View>
        {list.map((item, index) => (
          <View key={index} style={styles.listItemContainer}>
            <Image
              source={item.icon}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
            <Text style={GlobalStyles.text}>{item.name}</Text>
            <AntDesign name="right" size={30} color={'black'} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExpenceSettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    shadowColor: '#cb08f2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    padding:15,
    margin:10
    // borderWidth:1
  },
});
