import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
   notificationDeleted: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.NOTIFICATION_DELETE_SUCCESS:
            return ({
                ...state,
                notificationDeleted: true
            });

        case actionTypes.NOTIFICATION_DELETE_FAIL:
            return ({
                ...state,
                notificationDeleted: false
            });

        default:
            return state;
    }
};

export default reducer;