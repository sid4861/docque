import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
    token: null,
    userId: null,
    error: null,
    authRedirectPath: '/',
    signedUp: false,
    userStored: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.AUTH_SUCCESS:
            return ({
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                signedUp: true
            });

        case actionTypes.AUTH_FAIL:
            return ({
                ...state,
                error: action.error
            });
        case actionTypes.STORE_USER_ON_SIGNUP_SUCCESS:
            return({
                ...state,
                userStored: true
            });

        case actionTypes.STORE_USER_ON_SIGNUP_FAIL:
            return({
                ...state,
                userStored: false
            });
        default:
            return state;
    }
};

export default reducer;