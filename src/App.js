import React, { Component } from 'react';
import './App.css';
import {Segment, Container, Loader, Dimmer} from 'semantic-ui-react'
import {connect} from 'react-redux'

import Navigation from './components/Navigation'
import CrytoContainer from './components/contorllers/CrytoContainer'
import CustomExchange from './components/contorllers/CustomExchange'
import Footer from './components/Footer'


class App extends Component {
  bodyStyle = {
    height: '90vh',
    marginTop: '-15px',
    paddingTop: '7%',
    borderRadius: 0
  }
  render() {
    if (this.props.loading){
      console.log(this.props.loading)
      return (
       <Dimmer active inverted>     
          <Loader  content='loading' size='large' />
      </Dimmer >  
      )
    }
    if (this.props.err){
      return (
        <Dimmer  active>
          <Container >{this.props.err}</Container>
        </Dimmer>
      )
    }
    return (
      <div > 
        <Navigation />
          <Segment inverted style={this.bodyStyle}>
            <Container>
              {console.log(this.props.bitcoinPrice)}
               <CrytoContainer bitcoinPrice={this.props.bitcoinPrice} />
               <CustomExchange />
             </Container> 
          </Segment> 
          <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading : state.bitcoinPrice.fetching,
    err: state.bitcoinPrice.error,
    bitcoinPrice: state.bitcoinPrice.bitcoinPrice
  }
}
export default connect(mapStateToProps)(App);
