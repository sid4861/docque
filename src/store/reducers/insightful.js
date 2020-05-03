import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
   incremented: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREMENT_INSIGHTFUL_SUCCESS:
            return ({
                ...state,
               incremented: true
            });

        case actionTypes.INCREMENT_INSIGHTFUL_FAIL:
            return ({
                ...state,
                incremented: false
            });

        default:
            return state;
    }
};

export default reducer;