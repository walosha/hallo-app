import * as React from 'react';
import Drawer from './src/Navigators/Drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from "./src/Containers/Signup"
const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
      {/* <Signup/> */}
    </NavigationContainer>
  );
};

export default App;
