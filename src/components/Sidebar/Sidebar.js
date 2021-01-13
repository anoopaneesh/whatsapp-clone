import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar , IconButton} from '@material-ui/core'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton >
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                    <ChatIcon />
                    </IconButton>
                    <IconButton >
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
