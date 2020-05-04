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

export const saveNotificationToUser = (notifyToUserId, questionId,token) => {
    return(
        (dispatch) => {
            const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + notifyToUserId + '"';
            let notification = {
                fromUserId: userId,
                type: 'answered',
                date: (Date(Date.now())).toString(),
                questionId: questionId
            };
            AxiosInstance.get('/users.json'+queryParams ).then(
                response => {
                    // var answerTemp = {};
                    // answerTemp[firebaseAnswerId] = userId;
                    //AxiosInstance.patch('/users/'+Object.keys(response.data)[0]+'/answers'+'.json',answerTemp);
                    ///dispatch(saveAnswerToUserSuccess());
                    AxiosInstance.post('/users/'+Object.keys(response.data)[0]+'/notifications.json', notification);
                }
            ).catch(
                err => {
                    console.log(err);
                   // dispatch(saveAnswerToUserFail());
                }
            );
        }
    );
};

export const saveAnswer = (addedAnswer, token) => {
    let askedAnswerLocal = {...addedAnswer};
    console.log('from action creator');
    console.log(askedAnswerLocal);
    let notifyToUserId = null;
    return(
        (dispatch)  => {
            AxiosInstance.post('/answers.json?auth='+token, askedAnswerLocal)
            .then(outerResponse => {
                AxiosInstance.get('/questions/'+askedAnswerLocal.questionId+'.json?auth='+token).then(
                    response => {
                        console.log(response.data);
                        let numberOfAnswers = response.data.noOfAnswers;
                        console.log(numberOfAnswers);
                        numberOfAnswers += 1;
                        //user id of user who asked the question
                        notifyToUserId = response.data.userId;
                        AxiosInstance.patch('/questions/'+askedAnswerLocal.questionId+'.json?auth='+token, {noOfAnswers: numberOfAnswers});
                        console.log(response);
                        dispatch(saveAnswerSuccess(outerResponse));
                        dispatch(saveAnswerToUser(outerResponse.data.name, token));
                        dispatch(saveNotificationToUser(notifyToUserId, askedAnswerLocal.questionId,token));
                    }
                );
                // console.log(response);
                // dispatch(saveAnswerSuccess(response));
                // dispatch(saveAnswerToUser(response.data.name, token));
            })
            .catch(error => {
                dispatch(saveAnswerFail(error));
            });
        }
    );
}