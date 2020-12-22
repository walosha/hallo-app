import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Containers/Home';
import MyHolla from '../Containers/MyHolla';
import Holla from '../Containers/Holla';
import Chat from '../Containers/Chat';
import Help from '../Containers/Help';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();
const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <FontAwesome5
            name="bars"
            size={20}
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const MyHollaNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <FontAwesome5
            name="bars"
            size={20}
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="MyHolla" component={MyHolla} />
    </Stack.Navigator>
  );
};
const HollaNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <FontAwesome5
            name="bars"
            size={20}
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Holla" component={Holla} />
    </Stack.Navigator>
  );
};
const ChatNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <FontAwesome5
            name="bars"
            size={20}
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
const HelpNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontWeight: 'bold'},
        headerRight: () => (
          <FontAwesome5
            name="bars"
            size={20}
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  MyHollaNavigator,
  HollaNavigator,
  ChatNavigator,
  HelpNavigator,
};
