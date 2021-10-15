import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY, MOVE_TO, WINNER, NEW_GAME, FIRST_STEP, GIVE_UP, WINNER_LIST } from '../actions';

export const initialState = {
    isXTurn: true,
    history: [
        {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
        }
    ],
    stepNumber: 0,
    winner: null,
    firstStep: true,
    winnerList: []
};

export const gameReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
                stepNumber: state.history.length,
                isXTurn: !state.isXTurn,
            };
        case MOVE_TO: 
            return {
            ...state,
            history: [...state.history.slice(0, action.payload + 1)],
            stepNumber:  action.payload,
            isXTurn: state.firstStep ? (!((action.payload + 1) % 2 ) ? false : true) 
                        : (!((action.payload + 1)  % 2 ) ? true : false)
            };
        case WINNER: 
            return {
            ...state,
            winner: action.payload,
            winnerList: [...state.winnerList, `${new Date().toLocaleString()} : ${action.payload}`],
            };
        case NEW_GAME: 
            return {
                ...state,
                isXTurn: state.firstStep,
                history: [
                    {
                        squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
                    }
                ],
                stepNumber: 0,
                winner: null,
            }
        case FIRST_STEP: 
            return {
                ...state,
                isXTurn: action.payload,
                firstStep: action.payload,
            };
        case GIVE_UP: 
            return {
                ...state,
                winner: state.isXTurn ? 'O' : 'X',
                winnerList: [...state.winnerList, `${new Date().toLocaleString()} : ${state.isXTurn ? 'O' : 'X'}`],
            };
        case WINNER_LIST: 
            return {
            ...state,
            winnerList: [...action.payload]
            };    
        default:
            return state;
    }
};