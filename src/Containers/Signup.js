import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';
import axios from 'axios';

export default function Signup() {
  const [password, setVisible] = useState(true);
  const changeIcons = () => {};
  useEffect(() => {
    axios
      .get(
        'http://ec2-13-233-194-107.ap-south-1.compute.amazonaws.com:3000/api/auth/users',
      )
      .then((res) => console.log(res));
  });
  return (
    <View style={{padding: 20}}>
      <View style={styles.signUpImageContainer}>
        <Image
          style={styles.signUpImage}
          source={require('../Assests/Logo.jpeg')}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon style={styles.iconStyle} name="email-outline" size={24} />
        <TextInput placeholder="Email or Phone" />
      </View>

      <View style={styles.inputContainer}>
        <Icon style={styles.iconStyle} name="lock-outline" size={24} />
        <TextInput secureTextEntry={true} placeholder="Password" />
        <Icon style={styles.showPassword} name="eye-off-outline" size={24} />
      </View>

      <View style={styles.forgotPassword}>
        <Text style={{position: 'absolute',right:0}}>Forgot your password?</Text>
      </View>

      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>
          Don't have and account?
          <Text style={styles.highlightedText}> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}
