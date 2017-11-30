import React from 'react'
import {Segment, Header, Container, Form} from 'semantic-ui-react'
import {exchangeUsdToBtc, exchangeBtcToUsd} from '../../utils/exchange'

class CustomExchange extends React.Component {
  state = {
    exchangeRate: 0,
    btc: 0,
    usd: 0
  }
  exchangeRateChange = (e) => {
    const rate = e.target.value
    this.setState({
      exchangeRate: rate
    })
    console.log(rate)
  }
  exchangeRateBtcToUsd = (e) => {
    const {exchangeRate} = this.state
    const amount = e.target.value
    const value = exchangeBtcToUsd(exchangeRate, amount)
    this.setState({
      btc: amount,
      usd: value
    })

  }
  exchangeRateUsdToBtc = (e) => {
    const {exchangeRate} = this.state
    const amount = e.target.value
    const value = exchangeUsdToBtc(exchangeRate, amount)
    this.setState({
      btc: value,
      usd: amount
    })
  }
  render () {
    return (
      <Segment>
        <Header color="blue">Custom bitcoin exchange</Header>
        <Container>
            <h5>This is a custom calculator for calculating bitcoin with custom exchange rate</h5>
        </Container>
        <Segment>
        <Form>
          <label>Exchange Rate</label>
            <Form.Input 
              icon='exchange' 
              onChange={(e) => {this.exchangeRateChange(e)}}
              value={this.state.exchangeRate}
             >
             </Form.Input>
            <Form.Group widths='equal'>
              <Form.Input 
                icon='btc' 
                iconPosition='left' 
                value={this.state.btc} 
                onChange={(e) => {this.exchangeRateBtcToUsd(e)}}
              />
               <Form.Input 
                icon='usd' 
                iconPosition='left'  
                value={this.state.usd}
                onChange={(e) => {this.exchangeRateUsdToBtc(e)}} 
              />
             </Form.Group>
         </Form>
        </Segment>
      </Segment>
    )
  }
}
export default CustomExchange