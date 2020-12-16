import React from 'react'
import auth from './auth'

function Login(props) {
    return (
        <div>
            Please login to continue<br />
            <button onClick={() => {
                auth.login(() => {
                    props.history.push('/')
                })
            }}>Log in</button>
        </div>
    )
}

export default Login
