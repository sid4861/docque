import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
    comments: [],
    error: null,
    redirectPath: '/home',
    savedComment: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SAVE_COMMENT_SUCCESS:
            return ({
                ...state,
                error: null,
                redirectPath: '/home',
                savedComment: true,
                comments: state.comments.concat(action.response)
            });

        case actionTypes.SAVE_COMMENT_FAIL:
            return ({
                ...state,
                error: action.error,
                redirectPath: '/home',
                savedComment: false
            });

        default:
            return state;
    }
};

export default reducer;