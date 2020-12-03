import React, { useState, useEffect } from 'react'
import './TinderCards.scss'
import ReactTinderCard from 'react-tinder-card'

function TinderCard() {
    const [people, setPeople] = useState([])
    const tinderServer = 'https://react-tinder-clone.herokuapp.com'

    const onSwipe = (direction) => {
        console.log('swiped ' + direction)
    }
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    const getTinderCardData = async () => {
        await fetch(tinderServer + '/tinder/cards')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setPeople(data)
            })
    }

    useEffect(() => {
        getTinderCardData()
    }, [])

    return (
        <div className="tinder__cards">
            {people.map((person, idx) => (
                <ReactTinderCard
                    key={idx}
                    className="swipe"
                    onSwipe={onSwipe}
                    onCardLeftScreen={() => onCardLeftScreen(person.name)}
                // preventSwipe={['right', 'left']}
                >
                    <div className="tinder__cards__person">
                        <img src={person.imgSrc} alt={person.name} />
                        <h4>{person.name}</h4>
                    </div>
                </ReactTinderCard>
            ))}
        </div>
    )
}

export default TinderCard
