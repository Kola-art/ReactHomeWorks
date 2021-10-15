import React from 'react';
import { useGameStore } from '../../context';
import { moveTo } from '../../actions/gameActions';
import './StepList.scss';

function Moves () {
    const [{ history }, dispatch] = useGameStore();
    const handleClick = (move) =>{
        dispatch(moveTo(move));
    }
    return (
            history.map((step, moves) => {
            const desc = moves ?
            'Go to move #' + moves :
            'Go to game start';
            return (
                <p key={moves}  >
                    <button className='step' onClick={() => handleClick(moves)}>{desc}</button>
                </p>
               
            )}
    ));
   
}

export default Moves