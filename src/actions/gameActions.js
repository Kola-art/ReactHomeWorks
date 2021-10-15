export const ADD_TO_HISTORY = 'add to history';
export const MOVE_TO = 'move to';
export const WINNER = 'winner';
export const NEW_GAME = 'new game';
export const FIRST_STEP = 'first step';
export const GIVE_UP = 'give up';
export const WINNER_LIST = 'winner lisst';


export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
})

export const moveTo = (step) => {
    return { 
        type: MOVE_TO,
        payload: step,
    }
} 

export const winnerIs = (player) => {
    return { 
        type: WINNER,
        payload: player,
    }
} 

export const newGame = () => {
    return { 
        type: NEW_GAME,
    }
} 
export const firstStep = (mark) => {
    return { 
        type: FIRST_STEP,
        payload: mark
    }
} 

export const giveUp = () => {
    return { 
        type: GIVE_UP,
    }
} 

export const winnerListFunc = (winnersList) => {
    return {
        type: WINNER_LIST,
        payload: winnersList
    }
}