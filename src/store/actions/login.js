import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const loginSuccess = (token, userId) => {
    return ({
        type: actionTypes.LOGIN_SUCCESS,
        idToken: token,
        userId: userId
    });
};

export const loginFail = (error) => {
    return ({
        type: actionTypes.LOGIN_FAIL,
        error: error
    });
};



export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return ({
        type: actionTypes.AUTH_LOGOUT,
        authRedirectPath: '/home'
    });
};

export const checkAuthTimeout = (expirationTime) => {
    return ((dispatch) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);  //firebase returns 3600 sec, setTimeout requires ms
    });
};

export const login = (email, password) => {
    return (
        (dispatch) => {
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            };

            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzYmdifMIowrHQgIPejuUzGRRNkMK_6G4';
            axios.post(url, authData)
                .then(res => {
                    console.log(res);
                    const expirationTime = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                    localStorage.setItem('token', res.data.idToken);
                    localStorage.setItem('expirationTime', expirationTime);
                    localStorage.setItem('userId', res.data.localId);
                    dispatch(loginSuccess(res.data.idToken, res.data.localId));
                    dispatch(checkAuthTimeout(res.data.expiresIn));
                })
                .catch(err => {
                    console.log(err);
                    dispatch(loginFail(err.response.data.error));
                });
        }
    );
}

export const authCheckState = () => {
    return (
        (dispatch) => {
            const token = localStorage.getItem('token');
            if (!token) {
                dispatch(logout());
            } else {
                const expirationTime = new Date(localStorage.getItem('expirationTime'));
                if (expirationTime <= new Date()) {
                    dispatch(logout());
                } else {
                    const userId = localStorage.getItem('userId');
                    dispatch(loginSuccess(token, userId));
                    dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime()) / 1000));
                }

            }
        }
    );
};

export const forgotPassword = (email) => {
    return (
        (dispatch) => {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBzYmdifMIowrHQgIPejuUzGRRNkMK_6G4';
            let data = { "requestType": "PASSWORD_RESET", "email": email };
            axios.post(url, data);
        }
    );

}
