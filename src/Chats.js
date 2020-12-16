import React, { useState, useEffect } from 'react'
import './Chats.scss'
import Chat from './Chat'

function Chats({ showBackButton }) {
    const [people, setPeople] = useState([])
    const tinderServer = 'https://react-tinder-clone.herokuapp.com'

    const getTinderCardData = async () => {
        await fetch(tinderServer + '/tinder/cards')
            .then(res => res.json())
            .then((data) => {
                setPeople(data)
            })
    }

    useEffect(() => {
        getTinderCardData()
    }, [])

    useEffect(() => {
        showBackButton(true)
        return () => {
            showBackButton(false)
        }
    }, [showBackButton])
    return (
        <div className="chats">
            {people.map((user) => (
                <Chat
                    key={user._id}
                    name={user.name}
                    userId={user._id}
                    message=""
                    timeStamp="1 minute ago"
                    avatar={user.imgSrc}
                />
            ))}
        </div>
    )
}

export default Chats
