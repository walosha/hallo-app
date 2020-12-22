import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import {
  ChatNavigator,
  HelpNavigator,
  HollaNavigator,
  MainStackNavigator,
  MyHollaNavigator,
} from './StackNavigator';
import Notification from '../Containers/Notification';
import MyHolla from '../Containers/MyHolla';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyHolla"
        component={MyHolla}
        options={{
          tabBarVisible: true,
          tabBarLabel: 'MyHolla',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Holla"
        component={HollaNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../Assests/Logo.jpeg')
                  : require('../Assests/Logo.jpeg')
              }
              style={{
                top: 7,
                width: 60,
                height: 50,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="comments" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpNavigator}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="info-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function NotificationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Friend Requests',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
          tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="SentFriendRequest"
        component={Notification}
        options={{
          tabBarLabel: 'Sent Friend Requests',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
          tabBarBadge: 0,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
export {NotificationTab};
