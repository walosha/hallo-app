import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';
const Notification = () => {
  return (
    <View style={{padding:15}}>
      <Text style={styles.text}>NOTIFICATION</Text>

      <Text style={{fontSize:18}}>Friend Request</Text>
      <Text style={{fontSize:20}}>No Friend Request Found</Text>
    </View>
  );
};

export default Notification;
