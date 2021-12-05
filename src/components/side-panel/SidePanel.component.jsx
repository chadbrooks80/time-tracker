import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'

const SidePanel = () => {
    return (
        <Sidebar
            size='large'
            fixed="left"
            as={Menu}
            visible
            inverted
            icon='labeled'
            vertical
            basic
            width='thin'
            style={{ background: 'red'}}
        >
            <h4>hello</h4>
        </Sidebar>    
    )
}

export default SidePanel
