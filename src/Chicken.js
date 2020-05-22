import React from 'react';
import chicken_image from './assets/mrs_chicken_logo.png';
import {
    GAME_OVER,
} from './lib/game-state';
import styled from 'styled-components'

const StyledChicken = styled.img`
    float :right;
    width: 100px;
    height: 100px;
    margin-top :150px;
    margin-right: ${props => props.step * 100 }px; 
    display: ${props => props.gameState === GAME_OVER ? 'none' : null }
`

const Chicken = ({step, gameState}) => {
    return  <StyledChicken 
            gameState={gameState}
            step={step}
            src={chicken_image}
            alt="Chicken"
        />
}

export default Chicken;