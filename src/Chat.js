import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import {
    Link
} from "react-router-dom";

function Chat({ name, userId, message, timeStamp, avatar }) {
    return (
        <div className="chat">
            <Link to={`/chats/${userId}`} className="chat__link">
                <Avatar className="chat__avatar" alt={name} src={avatar} />
                <div className="chat__details">
                    <h3>{name}</h3>
                    <p>{message}</p>
                </div>
                <div className="chat__timestamp">{timeStamp}</div>
            </Link>
        </div>
    )
}

export default Chat
