import React from 'react'
import './SwipeToolbar.scss'
import Fab from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeToolbar() {
    return (
        <div className="swipeToolbar">
            <Fab aria-label="Replay">
                <ReplayIcon />
            </Fab>
            <Fab aria-label="Close" style={{ color: '#f5b748' }}>
                <CloseIcon />
            </Fab>
            <Fab aria-label="StarRate" style={{ color: '#62b4f9' }}>
                <StarRateIcon />
            </Fab>
            <Fab aria-label="Favorite" style={{ color: '#76e2b3' }}>
                <FavoriteIcon />
            </Fab>
            <Fab aria-label="FlashOn" style={{ color: '#915dd1' }}>
                <FlashOnIcon />
            </Fab>
        </div>
    )
}

export default SwipeToolbar
