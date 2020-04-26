import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import AxiosInstance from '../../hoc/axios/instance.js';

export const authSuccess = (token, userId) => {
    return ({
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    });
};

export const authFail = (error) => {
    return ({
        type: actionTypes.AUTH_FAIL,
        error: error
    });
};

export const storeUserOnSignUpSuccess = () => {
    return ({
        type: actionTypes.STORE_USER_ON_SIGNUP_SUCCESS
    });
};

export const storeUserOnSignUpFail = (error) => {
    return ({
        type: actionTypes.STORE_USER_ON_SIGNUP_FAIL
    });
};

export const storeUserOnSignUp = (user) => {
    let userLocal = { ...user };

    return ((dispatch) => {

        AxiosInstance.post('/users.json', userLocal)
            .then(response => {
                dispatch(storeUserOnSignUpSuccess());
            })
            .catch(error => {
                dispatch(storeUserOnSignUpFail(error));
            });
    });

};


export const auth = (email, password, user) => {
    return (
        (dispatch) => {
            console.log(user);
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            };

            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzYmdifMIowrHQgIPejuUzGRRNkMK_6G4';
            axios.post(url, authData)
                .then(res => {
                    console.log(res);
                     user['userId'] = res.data.localId;
                    console.log(user);
                    dispatch(authSuccess(res.data.idToken, res.data.localId));
                    dispatch(storeUserOnSignUp(user));
                })
                .catch(err => {
                    dispatch(authFail(err.response.data.error));
                });
        }
    );
}