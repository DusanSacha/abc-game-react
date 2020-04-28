import React from 'react';
import './Chicken.css';
import chicken_image from './assets/mrs_chicken_logo.png';
import {
    GAME_OVER,
} from './lib/game-state';

const Chicken = ({step, gameState}) => {
    let className = gameState === GAME_OVER ? 'hidden' : '';
    className += ' Chicken';

    const inputStyle = {marginRight: (step * 100) +'px'}
    return <img style={inputStyle} src={chicken_image} className={className} alt="Chicken"/>
}

export default Chicken;