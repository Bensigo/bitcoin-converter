import React from 'react'
import {Menu, Header} from 'semantic-ui-react'

const style = {
  backgroundColor: 'rgb(44,78,199)',
  borderRadius: 0
}
const Navigation = () => {
  return (
     <Menu style={style}>
      <Menu.Item 
        as={Header}
        content="Bitcoin converter"
        style={{color: 'white'}}
        >
        </Menu.Item>
     </Menu>
  )
}

export default Navigation