import React, { useState, useEffect } from 'react'
// import Avatar from '@material-ui/core/Avatar'

function ChatScreen({ match, showBackButton }) {
    const tinderServer = 'https://react-tinder-clone.herokuapp.com'
    const [people, setPeople] = useState([])

    const getTinderCardData = async () => {
        await fetch(tinderServer + '/tinder/cards')
            .then(res => res.json())
            .then((data) => {
                setPeople(data)
            })
    }
    useEffect(() => {
        getTinderCardData()
    }, [match])

    useEffect(() => {
        showBackButton(true)
        return () => {
            showBackButton(false)
        }
    }, [showBackButton])

    return (
        <div className="chatScreen">
            {people.map(person => (
                person._id === match.params.id && <div key={person._id}> {person.name}</div>
            ))}
        </div>
    )
}

export default ChatScreen
