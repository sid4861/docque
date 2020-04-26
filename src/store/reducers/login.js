import * as actionTypes from '../actions/actionTypes.js';


const initialState = {
    token: null,
    userId: null,
    error: null,
    authRedirectPath: '/',
    loggedIn: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.LOGIN_SUCCESS:
            return ({
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                loggedIn: true
            });

        case actionTypes.LOGIN_FAIL:
            return ({
                ...state,
                error: action.error,
                loggedIn: false
            });

        case actionTypes.AUTH_LOGOUT:
            return ({
                ...state,
                token: null,
                userId: null,
                loggedIn: false,
                authRedirectPath: action.authRedirectPath
            });

        default:
            return state;
    }
};

export default reducer;