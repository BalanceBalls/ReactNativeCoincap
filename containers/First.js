import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { PairList } from '../components/pairlist/PairListComponent'
import { Toolbar } from '../components/toolbar/ToolbarComponent'

export default class First extends Component {
    
  
    render() {
      return (
        <View style={styles.container}>
        <Toolbar />
        <ScrollView style={styles.scrollview}>
        <PairList />
       
        </ScrollView>
        </View>
      )}
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
      