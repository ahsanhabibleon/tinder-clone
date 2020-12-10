import React from 'react'
import "./header.scss";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton className="header__icon">
                <PersonIcon fontSize="large" />
            </IconButton>

            <div className="tinder__logo header__icon">
                <a href="/">
                    <img src="./logo.png" alt="" />
                </a>
            </div>

            <IconButton className="header__icon" >
                <ForumIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
