/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Blink from './components/Blink';
import LotsOfStyle from './components/LotsOfStyle';
import FixedDimensions from './components/FixedDimensions';
import FlexStyle from './components/FlexStyle';


class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}} >
        <Text><Blink text="Hello" /> {this.props.name}!</Text>
      </View>
    )
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <Image source={pic} style={{width: 200, height: 100}} />
    );
  }
}

export default class HelloWorldApp extends Component {
  state = {cycle: false};

  componentDidMount() {
    setInterval(() => {this.setState(previousState => (
      {cycle: !previousState.cycle}
    ))}, 3000);
  };

  render() {
    if(this.state.cycle)
    {
      return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
          <Greeting name='Ren'/>
          <Bananas/>
          <LotsOfStyle/>
          <FixedDimensions />
        </View>
      );
    }

    return (
      <View style={{flex:1}}>
        <FlexStyle />
      </View>
    );
  }
}