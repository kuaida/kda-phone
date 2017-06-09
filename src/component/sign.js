/*
* jindingwen 2017-06-04
* App 注册页
*/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';
import Button from './small/button';

export default class Sign extends Component{
  constructor(props) {
    super(props);
    this.state = {name: '',
                  password: '',
                  psword: ''}
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Image style={styles.backimg} source={{uri: 'https://img3.doubanio.com/img/celebrity/small/2431.jpg'}}>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image style={styles.imgstyle} source={{uri: 'https://img3.doubanio.com/img/celebrity/small/2431.jpg'}} />
          <Text>React Native</Text>
        </View>
        <View style={styles.input}>
          <View style={styles.ip}>
            <TextInput
              style={styles.inputstyle}
              onChangeText={(name) => this.setState({name})}
              underlineColorAndroid='transparent'
              placeholder='input your name'
              value={this.state.name}
            />
          </View>
          <View style={styles.ip}>
            <TextInput
              style={styles.inputstyle}
              onChangeText={(password) => this.setState({password})}
              underlineColorAndroid='transparent'
              placeholder='input your password'
              value={this.state.password}
            />
          </View>
          <View style={styles.ip}>
            <TextInput
              style={styles.inputstyle}
              onChangeText={(psword) => this.setState({psword})}
              underlineColorAndroid='transparent'
              placeholder='input your password'
              value={this.state.psword}
            />
          </View>
          <View style={styles.foot}>
            <View style={styles.footleft}>
              <Button style={styles.btnstyle} onPress={()=>navigate('Ques')} label="提交"/>
            </View>
            <View style={styles.footright}>
              <Button onPress={()=>navigate('Ques')} label="登录"/>
            </View>
          </View>
        </View>
      </View>
      </Image>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backimg: {
    flex: 1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  img: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgstyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  input: {
    flex: 6,
    flexDirection: 'column',
    paddingRight: 60,
    paddingLeft: 60,  
  },
  inputstyle: {
    opacity: 0.5,
    backgroundColor: 'white',
    height: 28,
    fontSize: 12,
    padding: 0,
    paddingLeft: 20,
    borderRadius: 8,

  },
  ip: {  
    
    height: 28,
    marginTop: 5
  },
  foot: {
    flex: 1,
    flexDirection: 'row',
  },
  footleft: {
    paddingLeft: 30,
    marginTop: 10
  },
  footright: {
    paddingLeft: 50,
    marginTop: 10
  },
  btnstyle: {
    color: '#ddd',
    marginLeft: 50,
  }
});
