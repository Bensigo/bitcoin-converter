import {FETCHING_START, FETCHED, FETCHED_FAILED} from '../actions/bitcoinPrice'
const initialState = {

  fetching: false,
  fetched: false,
  bitcoinPrice: {
    BTC: '1',
    USD: ''
   },
  error: null
}

const bitcoinPrice = (state=initialState, action) => {
  switch(action.type){
    case FETCHING_START:
      return {...state, fetching: true}
    case FETCHED:
      localStorage.setItem("BTC_USD", action.payload.USD)
      return {...state, fetching: false, fetched: true, bitcoinPrice: {BTC: '1', USD: action.payload.USD} }
    case FETCHED_FAILED: 
      return {...state, fetching: false, error: action.payload, fetched: false}
    default: 
      return state
  }
}

export default bitcoinPrice