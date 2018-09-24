import React, {Component } from 'react';
import { StyleSheet, View , ActivityIndicator , Text} from "react-native";
import { VictoryArea, VictoryAxis , VictoryChart, VictoryTheme , VictoryPie} from 'victory-native';
import { connect } from 'react-redux';
import * as actions from '../../actions'



class ChartsComponent extends Component {
    constructor(props) {
        super(props)
        this.props.getChartsData(this.props.pair);
        console.log('MY_DEBUG_PROPS', this.props.pair)
    }
    
    render() {
        let data = this.props.chartsValues;
        const chartsLoading = this.props.chartsLoading;
        let showChart = false;
        if(data[0] && data[0].close ){
            var min = data[0].close;
            var max = 0;
            data.forEach(item => {
                if (item.close < min) min = item.close;
                if (item.close > max) max = item.close;
            });
        showChart =  true;
        }else{
            data = {
                Loaded: false,
                Message:  'No data for this chart',
              }
        }
        return (
        <View style={styles.container}>
            {chartsLoading && ( 
                <ActivityIndicator  size="large" color="white" style={ { marginTop: 40 } }  /> 
                
            )}  
            
            {!showChart && (
                <Text style={{color: '#F4F5FE' , fontSize: 26, marginTop: 40}}>{data.Message} </Text>
            )}
            
            {showChart && (
            <VictoryChart 
                //slows a lot! currently disabled
                // animate={{
                //     duration: 500,
                //     onLoad: { duration: 250 }
                // }} 
                width={300} height={250}
                maxDomain={{ y: max }}
                minDomain={{ y: min }}
            >
            <VictoryArea data={data} x="time" y="close" style={{
                data: {
                    fill: "#a3a7f7", fillOpacity: 0.7, stroke: "#FFFFFF", strokeWidth: 1
                }, }} />
            <VictoryAxis
                dependentAxis={true}
                style={{
                axis: { stroke: "white" },
                tickLabels: { fontSize: 15, padding: 5, fill: "white" }
            }} />
            </VictoryChart>
        )}
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute' , 
    marginTop: 100
  }
});

const mapStateToProps = (store) => ({
  
    chartsValues: store.charts.chartsData,
    chartsLoading: store.charts.chartsLoading
  });  
  
  const mapDispatchToProps = (dispatch) => ({
      getChartsData:   (props) => { 
          dispatch(actions.getChartsData(props))
      }
  });
  
export const ChartsData = connect(mapStateToProps, mapDispatchToProps)(ChartsComponent);
  