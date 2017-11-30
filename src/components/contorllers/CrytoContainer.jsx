import React from 'react'
import {Segment} from 'semantic-ui-react'
import { converterBtcToUsd, convertUsdToBtc} from '../../utils/converter'

import ShowBTC from '../ShowBTC'

class CryptoContainer extends React.Component {
  state = {
    cryptoValue: this.props.bitcoinPrice.BTC,
    currencyValue: this.props.bitcoinPrice.USD,
    currency: 'USD'
  }
  componentDidMount() {
    console.log(this.state)
  }
  handleChange = (e) => {
    const amount = e.target.value
    const result = converterBtcToUsd(amount)
    this.setState({
      cryptoValue: amount,
      currencyValue: result
    })
    
  }
  handleChangeInAmount = (e) => {
    const amount = e.target.value
    const result = convertUsdToBtc(amount)
    this.setState({
      currencyValue: amount,
      cryptoValue: result
    })
  }
  
  render () {
      return (
        <Segment >
          <ShowBTC 
             handleChange={this.handleChange} 
             cryptoValue={this.state.cryptoValue} 
             handleChangeInAmount={this.handleChangeInAmount} 
             currencyValue={this.state.currencyValue}
           />
        </Segment>
      )
  }
}


export default CryptoContainer