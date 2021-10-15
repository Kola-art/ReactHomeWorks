import React from 'react';
import './Game.scss';
import Board from '../Board/Board';
import NewGame from '../NewGame/NewGame';
import { useGameStore } from '../../context';
import { calculateWinner } from '../../utils';
import { addToHistory, winnerIs } from '../../actions';
import Moves from '../StepList/StepList';
import FirstStep from '../FirstStep/FirstStep';
import Player from '../Player/Player';
import GiveUp from '../GiveUp/GiveUp';
import WinnersList from '../WinnersList/WinnersList';

export default function Game() {
    const [{history, winner, isXTurn, winnerList }, dispatch] = useGameStore();
    const currentStep = history[history.length - 1];
    
    const handleClick = (i) => {
        if(winner) {
            return;
        }
        const squares = [...currentStep.squares];
        squares[i] = isXTurn ? 'X' : 'O'
        dispatch(addToHistory(squares));
        const win = calculateWinner(squares);
        if(win){
            dispatch(winnerIs(win));
        }
    };
    
    if(winner) {
        localStorage.setItem('winners', JSON.stringify([...winnerList]));
    }

    return (
        <div>
            <WinnersList />
            <div className={winner ? 'game disabled' : 'game'}>
                <FirstStep />
                <Board squares={currentStep.squares} onClick={handleClick}/>
                <div>
                    <Player />  
                    {winner ? <NewGame /> : <Moves />} 
                </div>
            </div>
                <GiveUp />
        </div>
    )
}