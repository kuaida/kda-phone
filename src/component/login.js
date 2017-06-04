/*
* jindingwen 2017-06-04
* App 登录页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';



export default class Login extends Component{
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>登录</Text>
        <Text onPress={()=>navigate('Sign')}>去注册</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});
