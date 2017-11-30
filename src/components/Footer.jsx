import React from 'react'
import {Segment, Container} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment inverted style={{marginTop: -20}}>
      <Container>
        <center>
          <span role="img"> Bitcoin converter &#169; 2017 made with ❤ from ditelabs </span>
        </center>
      </Container>
    </Segment>
  )
}
export default Footer