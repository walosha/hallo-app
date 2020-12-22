import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card, CardItem} from 'native-base';
import styles from '../styles/styles';
const Chat = () => {
  return (
    <ScrollView>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <Text style={styles.cardText}>ABC Depp</Text>
        </CardItem>
      </Card>

      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <Text style={styles.cardText}>Johnny Depp</Text>
        </CardItem>
      </Card>

      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/rock.jpg')} />
          <Text style={styles.cardText}>Dwyane Johnson</Text>
        </CardItem>
      </Card>
    </ScrollView>
  );
};

export default Chat;
