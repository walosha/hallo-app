import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Button, Card} from 'native-base';
import styles from '../styles/styles';
const Profile = () => {
  const [isSelected, setSelected] = useState(true);

  return (
    <View>
      <Text style={styles.text}>PROFILE</Text>
      <View style={{display: 'flex', padding: 20, flexDirection: 'row'}}>
        <Image
          source={require('../Assests/rdj.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileBold}>Robert Downey Jr</Text>
          <Text style={styles.profileBold}>50 years</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonOptions}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonOptions}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonOptions}>Social</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <Card style={{borderRadius: 5}}>
          <Text style={styles.cardHeader}>Personal</Text>
          <View style={styles.cardBody}>
            <Text style={styles.cardRow}>
              First Name: <Text style={styles.profileBold}>Tom</Text>
            </Text>
            <Text style={styles.cardRow}>
              Last Name: <Text style={styles.profileBold}>Cruise</Text>
            </Text>
            <Text style={styles.cardRow}>
              Date of Birth: <Text style={styles.profileBold}>19-06-1970</Text>
            </Text>
            <Text style={styles.cardRow}>
              Email: <Text style={styles.profileBold}>tomcrusie@gmail.com</Text>
            </Text>
            <Text style={styles.cardRow}>
              Phone Number: <Text style={styles.profileBold}>9871623780</Text>
            </Text>
          </View>
        </Card>
      </View>

      {/* <TouchableOpacity onPress={() => setSelected(!isSelected)}>
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {isSelected && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#000',
              }}
            />
          )}
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;
