import React from 'react';
import { Container, Form, Header,  Icon} from 'semantic-ui-react'


const ShowBTC = (props) => {

 return (
   <Container>
    <Header color="blue" >
    <Icon name="btc" fitted />
    Calculator  
    </Header>
     <Form size="large" widths='equal'>
      <Form.Group style={{padding: 'auto'}}>
        <Form.Input 
            icon="btc" 
            iconPosition="left"
             value={props.cryptoValue} 
             width={8}
             onChange={(e) => {props.handleChange(e)}}
              />
        <Form.Input 
          icon="usd"
          iconPosition="left"
          value={props.currencyValue}
          onChange={(e) => {props.handleChangeInAmount(e)}}
          width={8}
        />
      </Form.Group>
     </Form>
   </Container>
 ) 
}
export default  ShowBTC 