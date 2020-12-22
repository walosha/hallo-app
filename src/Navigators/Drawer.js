import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Containers/Profile';
import Contact from '../Containers/Contact';
import Notfication from '../Containers/Notification';
import Help from '../Containers/Help';
import Logout from '../Containers/Logout';
import mytabs, {NotificationTab} from '../Navigators/Tabs';
import DrawerItem from '../Containers/DrawerItem';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={DrawerItem}>
      <Drawer.Screen name="Profile" component={mytabs} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Notification" component={NotificationTab} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
