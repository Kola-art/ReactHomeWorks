import React from 'react';
import { useGameStore } from '../../context';
 import './Player.scss';
 
function Player () {
    const [{ winner, isXTurn }] = useGameStore();
    return (
        <div className='player'>
            { winner ? ((winner === 'Draw') 
                        ? <p> It`s {winner}  </p> 
                        : <p>The Winner is {winner}</p> ) 
                    : <p>Next step is: {  isXTurn ? 'X' : 'O' }</p>
                } 
        </div>
    )
}
 
export default Player;