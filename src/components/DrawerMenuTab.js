import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function DrawerMenuTab({Name, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerMainContainer}>
      <View style={styles.drawerImage}>
        <FontAwesome5 name={icon} size={24} />
      </View>
      <View style={styles.drawerTextContainer}>
        <Text style={styles.drawerText}>{Name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default DrawerMenuTab;
