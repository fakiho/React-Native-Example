import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {CreateAppContainer} from './router'


class App extends Component {
    render() {
      return <CreateAppContainer />;
    }
  }
  
  export default App;