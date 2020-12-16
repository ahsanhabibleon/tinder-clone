import React from 'react'
import "./Header.scss";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    Link
} from "react-router-dom";

function Header({ handleBackButton }) {
    return (
        <div className="header">
            {handleBackButton ? (
                <Link to="/">
                    <IconButton className="header__icon">
                        <ArrowBackIosIcon fontSize="large" />
                    </IconButton>
                </Link>
            ) : (
                    <Link to="/profile">
                        <IconButton className="header__icon">
                            <PersonIcon fontSize="large" />
                        </IconButton>
                    </Link>
                )}

            <div className="tinder__logo header__icon">
                <Link to="/">
                    <img src="/img/logo.png" alt="" />
                </Link>
            </div>
            <Link to="/chats">
                <IconButton className="header__icon" >
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
