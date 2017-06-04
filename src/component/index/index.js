/*
* jindingwen 2017-06-04
* App 内容主页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from '../small/button';

const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: '#E64A19'
  },
  homeHeaderTitle: {
    color: '#fff',
    alignSelf: 'center'
  }
});

var navigate;

class Index extends Component{
  constructor(props){
    super(props);
    navigate = this.props.navigation.navigate;
    this.state = {
      isLogin:false,
      data:[]
    }
  }
  componentWillMount(){
    fetch('https://ikda.cc/api/redis/question')
    .then((res)=>{
      return res.json()
    })
    .then((json)=>{
      this.setState(Object.assign({},this.state,{data:json}));
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
        <ScrollView>
          {
            this.state.data.map((ques)=>{
              return (
                <Text key={ques._id} onPress={()=>navigate("Ques",ques)}>{ques.title}</Text>
              )
            })
          }
        </ScrollView>
    );
  }
}

const IndexNav = StackNavigator({
  OneTab: {
    screen: Index,
    navigationOptions: {
      title: "快答",
      headerStyle: styles.homeHeader,
      headerTitleStyle: styles.homeHeaderTitle,
      headerRight: <Button onPress={()=>navigate('Ques')} label="提问"/>,
      headerLeft: <View style={{width: 40,height: 1}}></View>
    }
  }
});
export default IndexNav;
