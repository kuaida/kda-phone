import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection:'row',
    height: 21,    //通过大于TextInput的高度来弥补上面的问题
    justifyContent: 'flex-end'  //放置到底部
  },
  edit: {   
    height: 20,
    fontSize: 20,
    backgroundColor: 'lightgray',
    marginLeft: 10,//左右留出一定的空间
    marginRight: 10,
    padding: 0,
    borderRadius: 8,
    fontSize: 12,
    
  },
  left: {
    flex: 0.7
  },
  right: {
    flex: 0.15,
    justifyContent: 'center',
  },
  last: {
    flex: 0.15,
    justifyContent: 'center'
  }
});

export default class Comment extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <TextInput
            style={styles.edit}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid='transparent'
            placeholder='...写评论'
            value={this.state.text}
          />
        </View>
        <View style={styles.right}>
          <FontAwesome name="heart" size={12} color="red"/>
        </View>
        <View style={styles.last}>
          <FontAwesome name="star-o" size={12}/>
        </View>
      </View>
    );
  }

}