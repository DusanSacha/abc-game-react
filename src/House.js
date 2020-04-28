import React from 'react';
import './House.css';
import home from './assets/mrs_chicken_home.png';
import home_final from './assets/mrs_chicken_home_final.png';
import {
    GAME_OVER,
} from './lib/game-state';

const House = ({gameState}) => {
    return(
    <div>
        <img src={gameState === GAME_OVER ? home_final : home } className="House" alt="Chicken's House"/>
    </div>
    );
}

export default House;