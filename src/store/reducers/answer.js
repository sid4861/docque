import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
    answers: [],
    error: null,
    redirectPath: '/home',
    savedAnswer: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SAVE_ANSWER_SUCCESS:
            return ({
                ...state,
                error: null,
                redirectPath: '/home',
                savedAnswer: true,
                answers: state.answers.concat(action.response)
            });

        case actionTypes.SAVE_ANSWER_FAIL:
            return ({
                ...state,
                error: action.error,
                redirectPath: '/home',
                savedAnswer: false
            });

        default:
            return state;
    }
};

export default reducer;