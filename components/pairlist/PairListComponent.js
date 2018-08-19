import React, {PureComponent} from 'react';
import { 
          TouchableOpacity,
          Modal,
          StyleSheet ,
          View, 
          ActivityIndicator ,
          FlatList, 
          TouchableWithoutFeedback,  
        } from 'react-native';

import  ModalContentComponent  from '../modals/modalComponent'
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions'


class PairListComponent extends PureComponent {
    constructor() {
        super();
       
        this.state = {
            modalVisible: false,
            
            modalData: {
                pairSym: ' ',
                pairPrice: ' ',
                dayPercent: ' ',
                marketCap: ' ',
                
            }
          };        
      }

    actionOnRow(item) {
        this.setState({modalVisible: true});
        this.setState({modalData: {
            pairSym: item.symbol,
            pairPrice: item.quotes.USD.price,
            dayPercent: item.quotes.USD.percent_change_24h,
            marketCap: item.quotes.USD.market_cap,
        }});
        console.log('Selected Item :',item);
     }
    componentDidMount() {
       this.props.getApiData();
    }

    render() {       
        const isLoading = this.props.isLoading;
        const dataSource = this.props.pairList;
        const pair = this.state.currentPair;
        console.log('MY_DEBUG' , this.props);//#2D525A
        return (
            <View style={pairListStyle.container}>

              {isLoading && ( 
                 <ActivityIndicator style={pairListStyle.loader} size="large" color="#071127"/> 
              )}  
            
                <List>   
                    <FlatList
                        data={dataSource}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={ () => this.actionOnRow(item)}>
                                <ListItem 
                                  roundAvatar  
                                  title={ item.name }
                                  subtitle={item.quotes.USD.price}  
                                  titleStyle={{ color: '#BD1F48'}}
                                  subtitleStyle={{ color: '#5E629B'}}
                                  containerStyle={{backgroundColor: '#F3F3F3' ,  borderBottomWidth: 0, borderTopWidth: 0}}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                     /> 
                </List>
         
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
            
                    <TouchableWithoutFeedback onPress={ () => {
                        console.log('MY_DEBUG tp onpress' );
                        this.setState({modalVisible: false})}} >
                        <View>             
                        <ModalContentComponent data={this.state.modalData}/>
                        </View>
                
                    </TouchableWithoutFeedback>
                
                </Modal>
            
            </View>
           
        );
      }
}

const pairListStyle = StyleSheet.create({
    container: {   
      flex: 1,
      backgroundColor: '#F3F3F3',
      marginTop: -20, 
      
    },
    loader: {
        padding: 30,
        backgroundColor: '#F3F3F3',
    },
  });

const mapStateToProps = (store) => ({
  pairList: store.pairList.data,
  isLoading: store.pairList.isLoading,
});  

const mapDispatchToProps = (dispatch) => ({
    getApiData:   () => { 
        dispatch(actions.getApiData())
    }
});

export const PairList = connect(mapStateToProps, mapDispatchToProps)(PairListComponent);
