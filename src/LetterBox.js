import React from 'react';
import {
    GAME_OVER,
} from './lib/game-state';
import styled from 'styled-components'

const StyledLetterBox = styled.div`
    clear: both;
    font-size: 3em;
    display: ${props => props.gameState === GAME_OVER ? 'none' : null }
`

const LetterBox = ({letter, gameState}) => {
    return (
        <StyledLetterBox gameState={gameState}>
            <h1>{letter}</h1>
        </StyledLetterBox>
    );
}

export default LetterBox;