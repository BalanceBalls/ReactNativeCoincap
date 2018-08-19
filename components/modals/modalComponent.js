import React,{ PureComponent} from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,

} from 'react-native'

import { ChartsData } from '../charts/chartComponent'

var modalBackground = require('../../assets/details_bgr-min.jpg' );

export default class ModalContentComponent extends PureComponent {
   
    render() {
        return(
                <View style={modalStyle.container}>
                <Image         
                    style={modalStyle.img}
                    resizeMode='stretch'
                    source={modalBackground}
                    blurRadius={13}
                     />

                    <View style={{position: 'absolute' , marginTop: 20 }}>
                        <Text style={{color: '#F4F5FE' , fontSize: 22,  flex: 2}}>{this.props.data.pairSym}  ,
                        <Text style={{color: '#a3a7f7' , fontSize: 22}}> {this.props.data.dayPercent} %</Text>
                        </Text>
                        <Text style={{color: '#F4F5FE' , fontSize: 20}}>Price : {this.props.data.pairPrice} $ </Text>
                        <Text style={{color: '#F4F5FE' , fontSize: 20}}>Market cap: {this.props.data.marketCap} $</Text>
                    </View>
                    <ChartsData pair={this.props.data.pairSym}/>
                </View> 
  
        )};

    
}
var d = require('Dimensions');
var height = d.get('window').height;
const modalStyle = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%' ,
        marginTop: height / 3  ,
        alignItems: 'center'
    },
    img: {
       // zIndex: 1,
       //position: 'absolute',
       // flex: 1,
        //flex: 2, 
        //marginTop: 300,
    }
  });
