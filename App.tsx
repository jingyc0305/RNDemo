/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import Swiper from 'react-native-swiper'
import MyFirstTsComponet from './src/FirstTs'
import MyProps from './src/MyProps'
import AppleComponent from './src/Apple'
import HomeArtical from './src/HomeArtical'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  //private apple_color = "#ffffff"
  render() {
    var params = { apple_color :'红色', apple_weight: 1.8, apple_price: 9.9}
    var { apple_color,apple_weight} = params
    return (
      <AppleComponent apple_color={apple_color} apple_weight={apple_weight} />//cb={()=>{this.apple_color="#654897",this.setState()}}
      //<HomeArtical />
    );
  }
}
//<AppleComponent {...params}/>
//var { apple_color,apple_weight} = params
// <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      // <MyFirstTsComponet />
      // <MyProps {...params}/>
      // <MyProps name={name} sex={sex} />
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
   
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
