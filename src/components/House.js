import React from 'react';
import home from '../assets/mrs_chicken_home.png';
import home_final from '../assets/mrs_chicken_home_final.png';
import {
    GAME_OVER,
} from '../lib/game-state';
import styled from 'styled-components'

const StyledHouse = styled.div`
    float: left;
`

const House = ({gameState}) => {
    return (
        <StyledHouse>
            <img src={gameState === GAME_OVER ? home_final : home } className="House" alt="Chicken's House"/>
        </StyledHouse>
    );
}

export default House;