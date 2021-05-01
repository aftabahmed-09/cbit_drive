import React from 'react'
import '../../styles/Sidebar.css'

import NewFile from './NewFile'
import Chat from './Chat'
import Message from './Message'

const index = () => {
    return (
        <div className='sidebar'>
            <NewFile />

            <hr/>
                <Message/>
                <Message/>
                <Message/>
                <Chat/>


        </div>
    )
}

export default index
