/*
* jindingwen 2017-06-04
* App 入口导航器
*/
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from './component';
import Login from './component/login';
import Sign from './component/sign';
import Ques from './component/ques';


const App = StackNavigator({
  Home: {
    screen: Index,
    navigationOptions: {
      header:null
    }
  },
  Login: { screen: Login },
  Sign: { screen: Sign },
  Ques: { screen: Ques }
});

export default App;
