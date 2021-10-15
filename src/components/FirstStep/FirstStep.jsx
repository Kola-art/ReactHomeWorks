import React from 'react';
import './FirstStep.scss';
import { firstStep } from '../../actions';
import { useGameStore } from '../../context';
function FirstStep () {
    const [{ history }, dispatch] = useGameStore();
    let btns = document.getElementsByName('choser');
    const handleClick = (event,bool) => {
        if(history.length > 1) {
            return;
        }
        dispatch(firstStep( bool))
        for(let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('chosen');
        }
        event.target.classList.add('chosen');
    }
    return (
        <div className='wrapper'>
            <p>Choose who will start: </p>
            <button className='choser chosen' name='choser' onClick={(event) => handleClick(event,true)}>X</button>
            <button className='choser' name='choser' onClick={(event) =>handleClick(event, false)}>O</button>
        </div>
    )
}

export default FirstStep;