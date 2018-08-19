/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , ScrollView} from 'react-native';
import { Toolbar } from './components/toolbar/ToolbarComponent'
import { PairList } from './components/pairlist/PairListComponent'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore( reducers , applyMiddleware(thunk));


/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu' ,
});
*/

export default class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <View style={styles.container}>
        <Toolbar />
        <ScrollView style={styles.scrollview}>
        <PairList />
       
        </ScrollView>
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 

    //marginTop: 20,
    backgroundColor: '#F3F3F3',
  },
  scrollview: {
    flexDirection: 'column',
  } 
  
});
