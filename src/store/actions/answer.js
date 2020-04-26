import AxiosInstance from '../../hoc/axios/instance.js';
import * as actionTypes from './actionTypes.js';

const userId = localStorage.getItem('userId');

export const saveAnswerSuccess = (response) => {
    return({
        type: actionTypes.SAVE_ANSWER_SUCCESS,
        response: response.data.name
    });
};

export const saveAnswerFail = (error) => {
    return({
        type: actionTypes.SAVE_ANSWER_FAIL,
        error: error
    });
};

export const saveAnswerToUserSuccess = () => {
    return({
        type: actionTypes.SAVE_ANSWER_TO_USER_SUCCESS
    });
};


export const saveAnswerToUserFail = () => {
    return({
        type: actionTypes.SAVE_ANSWER_TO_USER_FAIL
    });
};


export const saveAnswerToUser = (firebaseAnswerId, token) => {
    
    return(
        (dispatch) => {
            const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + userId + '"';
            AxiosInstance.get('/users.json' +  queryParams ).then(
                response => {
                    var answerTemp = {};
                    answerTemp[firebaseAnswerId] = userId;
                    AxiosInstance.patch('/users/'+Object.keys(response.data)[0]+'/answers'+'.json',answerTemp);
                    dispatch(saveAnswerToUserSuccess());
                }
            ).catch(
                err => {
                    console.log(err);
                    dispatch(saveAnswerToUserFail());
                }
            );
        }
    );
};

export const saveAnswer = (addedAnswer, token) => {
    let askedAnswerLocal = {...addedAnswer};
    console.log('from action creator');
    console.log(askedAnswerLocal);
    return(
        (dispatch)  => {
            AxiosInstance.post('/answers.json?auth='+token, askedAnswerLocal)
            .then(response => {
                console.log(response);
                dispatch(saveAnswerSuccess(response));
                dispatch(saveAnswerToUser(response.data.name, token));
            })
            .catch(error => {
                dispatch(saveAnswerFail(error));
            });
        }
    );
}