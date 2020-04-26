import AxiosInstance from '../../hoc/axios/instance.js';
import * as actionTypes from './actionTypes.js';

const userId = localStorage.getItem('userId');

export const saveQuestionSuccess = (response) => {
    return({
        type: actionTypes.SAVE_QUESTION_SUCCESS,
        response: response.data.name
    });
};

export const saveQuestionFail = (error) => {
    return({
        type: actionTypes.SAVE_QUESTION_FAIL,
        error: error
    });
};

export const saveQuestionToUserSuccess = () => {
    return({
        type: actionTypes.SAVE_QUESTION_TO_USER_SUCCESS
    });
};


export const saveQuestionToUserFail = () => {
    return({
        type: actionTypes.SAVE_QUESTION_TO_USER_FAIL
    });
};


export const saveQuestionToUser = (firebaseQuestionId, token) => {
    
    return(
        (dispatch) => {
            const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + userId + '"';
            AxiosInstance.get('/users.json' +  queryParams ).then(
                response => {
                    var questionTemp = {};
                    questionTemp[firebaseQuestionId] = userId;
                    AxiosInstance.patch('/users/'+Object.keys(response.data)[0]+'/questions'+'.json',questionTemp);
                    dispatch(saveQuestionToUserSuccess());
                }
            ).catch(
                err => {
                    console.log(err);
                    dispatch(saveQuestionToUserFail());
                }
            );
        }
    );
};

export const saveQuestion = (askedQuestion, token) => {
    let askedQuestionLocal = {...askedQuestion};
    console.log('from action creator');
    console.log(askedQuestionLocal);
    return(
        (dispatch)  => {
            AxiosInstance.post('/questions.json?auth='+token, askedQuestionLocal)
            .then(response => {
                console.log(response);
                dispatch(saveQuestionSuccess(response));
                dispatch(saveQuestionToUser(response.data.name, token));
            })
            .catch(error => {
                dispatch(saveQuestionFail(error));
            });
        }
    );
}