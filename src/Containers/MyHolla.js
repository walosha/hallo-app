import React from 'react';
import {Image, View, Text} from 'react-native';
import {Header, Content, Card, CardItem, Body, Container} from 'native-base';
import styles from '../styles/styles';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const MyHolla = () => {
  return (
    <ScrollView>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>ABC Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>

      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>

      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Image style={styles.image} source={require('../Assests/p1.jpg')} />
          <View>
            <Text style={styles.cardText}>Johnny Depp</Text>
            <Text style={styles.cardSubtitile} numberOfLines={1}>
              asdasdasdas used in laying out print, graphic or web designs.
            </Text>
          </View>
          <FontAwesome5
            name={'comments'}
            size={30}
            style={{position: 'absolute', right: 20}}
          />
        </CardItem>
      </Card>
    </ScrollView>
  );
};

export default MyHolla;
