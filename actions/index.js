
export function getApiData() {
    return (dispatch) => {
        fetch('https://api.coinmarketcap.com/v2/ticker/?limit=50&structure=array')
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch(responseSuccessful(responseJson.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
}
  
export const responseSuccessful = (values) => {
    return { 
        type: 'FETCH_API_VALUES',
        payload: values
    };
}

export const clearState = () => {
    return {
        type: 'CLEAR_TO_INITIAL_STATE'
    }
} 

export function getChartsData(pair) {
    const url = 'https://min-api.cryptocompare.com/data/histohour?fsym=' + pair + '&tsym=USD&limit=24&aggregate=1&e=CCCAGG';
    console.log('MY_DEBUG Prefetch' , url)
    return (dispatch) => {
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch(chartsResponseSuccessful(responseJson.Data));
          console.log('MY_DEBUG action success');
          
        })
        .catch((error) => {
          console.log('MY_DEBUG action fail' , error);
          const resp = {
            Loaded: false,
            Message:  'No data for this chart',
          }
          dispatch(chartsResponseSuccessful(resp));
        });
    }
}

export const chartsResponseSuccessful = (values) => {
    return { 
        type: 'FETCH_CHART_VALUES',
        payload: values
    };
}