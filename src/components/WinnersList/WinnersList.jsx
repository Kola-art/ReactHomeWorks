import React, { useEffect } from 'react';
import { useGameStore } from '../../context';
import { winnerListFunc } from '../../actions';
import './WinnersList.scss';
function WinnersList () {
    const [{ winnerList }, dispatch ] = useGameStore();

    useEffect( () => {
        if(localStorage.getItem('winners')) {
            let data = JSON.parse(localStorage.getItem('winners'));
            dispatch(winnerListFunc(data));
        }
    }, [dispatch]);
    
    return (
        <div className="list">
            <p>List of winners: </p>
            <ul>
            {
                winnerList && winnerList.map((winner, idx) => {
                    return (
                        <li key={idx}>{winner}</li>
                    );
                })
            }
            </ul>
        </div>
    )
}

export default WinnersList;