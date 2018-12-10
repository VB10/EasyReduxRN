/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './src/redux/reducers'
import HomePage from './src/views/home';
export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <HomePage/>
     </Provider>
    );
  }
}

