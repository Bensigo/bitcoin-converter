import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'
import {bitcoinPrice} from './actions/bitcoinPrice'

const middleware = applyMiddleware(logger, thunk)
const store = createStore(reducer, middleware)

// testing the bitcoinPrice 
store.dispatch(bitcoinPrice())
export default store;