import { combineReducers } from 'redux';

const initialState = {
    isLoading: true,
    data: [],
    
};

const initialStateCharts = {
  chartsLoading : true,
  chartsData: [
    {time : 123 , close : 12},
    {time : 124 , close : 13},
    {time : 125 , close : 14},
    {time : 126 , close : 15}
  ],

}
function pairList(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_API_VALUES':
        // console.log('MY_DEBUG' , action);
     return {    
         
         isLoading: false,
         data: [
            ...action.payload
          ]
     }   
    case 'CLEAR_TO_INITIAL_STATE':
     return{ 
      isLoading: true,    
      data: [],
     }
    default:
     return state;
  }
}
function charts(state = initialStateCharts, action = {}) {
  switch (action.type) {
    case 'FETCH_CHART_VALUES':
      console.log('MY_DEBUG state' , state);
      return {
      
        chartsLoading:false,
        chartsData: [
          ...action.payload
        ]
      } 
    default:
     return state;
  }
}

export default reducers = combineReducers({
  pairList,
  charts,
})