import React, { Component } from 'react';
import {
  Text,
  View,
  WebView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }
  
    render() {
      return (
       <View style={styles.container}>
         <WebView
           onLoad={() => this.hideSpinner()}
           source={{uri: 'https://github.com/facebook/react-native'}}
           style={{marginTop: 20}}
        />
         {this.state.visible && (
          <ActivityIndicator
            style={{  padding: 30, backgroundColor: '#F3F3F3', }}
            size="large"
          />
        )}
           </View> 
      )}
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'flex-end', 
    
        //marginTop: 20,
        backgroundColor: '#042441',
      },
      scrollview: {
        flexDirection: 'column',
      } 
      
    });