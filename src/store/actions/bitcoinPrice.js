import axios from 'axios'

export const FETCHING_START = 'FETCHING_START'
export const FETCHED = 'FETCHED'
export const FETCHED_FAILED = 'FETCHED_FAILED'
// TODO: add the api url 
const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'

export const bitcoinPrice = () => {
  return (dispatch) => {
    dispatch({type: FETCHING_START})
     axios(url)
     .then(response => {
       dispatch({type: FETCHED, payload: response.data})
       console.log(response.data)
     })
     .catch(err => {
        console.error(err)
       dispatch({type: FETCHED_FAILED, payload: 'Oops something went wrong, try again :('})
     })
  }
}