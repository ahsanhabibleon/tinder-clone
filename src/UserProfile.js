
import React, { useState, useEffect } from 'react'

function UserProfile() {
    const [user, setUser] = useState('')
    const [img, setImg] = useState('')

    const changeUserName = (e) => {
        setUser(e.target.value)
    }
    const changeImage = (e) => {
        setImg(e.target.value)
    }

    const newUser = JSON.stringify({
        name: user,
        imgSrc: img
    })

    const submitNewUser = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:8001/tinder/cards', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: newUser
        })
            .then(() => {
                setUser('')
                setImg('')
            })
    }

    return (
        <div className="App">
            <form onSubmit={submitNewUser} className="App__form">
                <label htmlFor="user">Username</label>
                <input name="user" id="user" type="text" value={user} onChange={changeUserName} />
                <label htmlFor="image">Image source</label>
                <input name="image" id="image" type="text" value={img} onChange={changeImage} />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default UserProfile;
