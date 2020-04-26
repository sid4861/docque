import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
    questions: [],
    error: null,
    redirectPath: '/home',
    savedQuestion: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SAVE_QUESTION_SUCCESS:
            return ({
                ...state,
                error: null,
                redirectPath: '/home',
                savedQuestion: true,
                questions: state.questions.concat(action.response)
            });

        case actionTypes.SAVE_QUESTION_FAIL:
            return ({
                ...state,
                error: action.error,
                redirectPath: '/home',
                savedQuestion: false
            });

        default:
            return state;
    }
};

export default reducer;