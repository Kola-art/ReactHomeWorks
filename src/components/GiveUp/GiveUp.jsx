import React from 'react';
import { giveUp } from '../../actions';
import { useGameStore } from '../../context';
import './GiveUp.scss';

function GiveUp () {
    const [{ winner }, dispatch] = useGameStore()
           
    const handleGiveUp = () => {
        if (winner) {
            return true;
        }
        else {
            dispatch(giveUp());
        }
    }

    return (
        <div className='giveUp'>
            <button className='giveUpBtn' onClick={handleGiveUp}> Give up</button>
        </div>
    )
}

export default GiveUp;