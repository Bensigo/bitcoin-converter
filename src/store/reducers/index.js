import {combineReducers} from 'redux'

// TODO: import all reducer here and add to the combine reducer 
import bitcoinPrice  from './bitcoinPrice'

const reducer = combineReducers({
  bitcoinPrice
})
export default reducer