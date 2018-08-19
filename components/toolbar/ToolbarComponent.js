import React, {Component} from 'react';
import {   StyleSheet , View , TouchableOpacity , Text , StatusBar} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions'

export default class ToolbarComponent extends Component {
  
  onPressGetMoreButton(){
   this.props.clearState();
   this.props.getApiData();
  }

  render() {
    return (
    <View style={toolbarStyle.containerToolbar}>
    <StatusBar backgroundColor="#071127"
     barStyle="light-content" />
        <TouchableOpacity
            style={toolbarStyle.button}
            onPress={this.onPressGetMoreButton.bind(this)}
        >
        <Text style={toolbarStyle.buttontext }> Reload </Text>
       </TouchableOpacity>  
    </View>
    );
  }
}
const toolbarStyle = StyleSheet.create({
    containerToolbar: {
      
      flexDirection: 'column',
      height: 50,
      width: "100%",
      alignItems: 'center',
      
      backgroundColor: '#042441', 
    },
    button: {
      alignItems: 'center',
      //padding: 15
      marginTop: 25,
    },
    buttontext: {
      color: "#FFFFFF",
    }
  });


  
const mapDispatchToProps = (dispatch) => ({
    getApiData:   () => { 
        dispatch(actions.getApiData())
      
    },
    clearState: () => {
      dispatch(actions.clearState())
    }
});

export const Toolbar = connect(null, mapDispatchToProps)(ToolbarComponent);
