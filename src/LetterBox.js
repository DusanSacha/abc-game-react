import React from 'react';
import './LetterBox.css';
import {
    GAME_OVER,
} from './lib/game-state';


const LetterBox = ({letter, gameState}) => {
    let className = gameState === GAME_OVER ? 'hidden' : null;
    return( <div className="LetterBox">
        <h1 className={className}>{letter}</h1>
        </div>);
}

export default LetterBox;