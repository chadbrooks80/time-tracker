import React from 'react'
import { Menu } from 'semantic-ui-react'

const TopPanel = () => {
    return (
        <Menu
        size='large'
        fixed="top"
        as={Menu}
        visible
        inverted
        icon='labeled'
        horizontal
        basic
        width='thin'
        style={{ background: 'green'}}
        >
        <Menu.Header onClick={ () => alert('hit') } >helo there</Menu.Header>
        <Menu.Item>test</Menu.Item>
        <Menu.Item onClick={ () => alert('hit') } >dog</Menu.Item>
        <Menu.Header>tet</Menu.Header>
      </Menu>    
    )
}

export default TopPanel
