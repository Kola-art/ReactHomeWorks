import React from 'react';
import { newGame } from '../../actions';
import { useGameStore } from '../../context';
import './NewGame.scss';
function NewGame () {
    const [{ firstStep }, dispatch] = useGameStore();
    const handleClick = () => {
        dispatch(newGame(firstStep));
    }
    return (
        <button className='start' onClick={handleClick}>Start New Game</button>
    )
}

export default NewGame;