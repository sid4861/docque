import AxiosInstance from '../../hoc/axios/instance.js';
import * as actionTypes from './actionTypes.js';

const userId = localStorage.getItem('userId');

export const saveCommentSuccess = (response) => {
    return ({
        type: actionTypes.SAVE_COMMENT_SUCCESS,
        response: response.data
    });
};

export const saveCommentFail = (error) => {
    return ({
        type: actionTypes.SAVE_COMMENT_FAIL,
        error: error
    });
};

export const saveCommentToUserSuccess = () => {
    return ({
        type: actionTypes.SAVE_COMMENT_TO_USER_SUCCESS
    });
};


export const saveCommentToUserFail = () => {
    return ({
        type: actionTypes.SAVE_COMMENT_TO_USER_FAIL
    });
};


export const saveCommentToUser = (firebaseAnswerId, token) => {

    return (
        (dispatch) => {
            const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + userId + '"';
            AxiosInstance.get('/users.json' + queryParams).then(
                response => {
                    var commentTemp = {};
                    commentTemp[firebaseAnswerId] = userId;
                    AxiosInstance.patch('/users/' + Object.keys(response.data)[0] + '/comments' + '.json', commentTemp);
                    dispatch(saveCommentToUserSuccess());
                }
            ).catch(
                err => {
                    console.log(err);
                    dispatch(saveCommentToUserFail());
                }
            );
        }
    );
};


export const saveNotificationToUser = (notifyToUserId, questionIdOfComment,answerId,token) => {
    return(
        (dispatch) => {
            const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + notifyToUserId + '"';
            let notification = {
                fromUserId: userId,
                type: 'commented',
                date: (Date(Date.now())).toString(),
                answerId: answerId,
                questionIdOfComment: questionIdOfComment
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


export const saveComment = (addedComment, token, answerId) => {
    let addedCommentLocal = { ...addedComment };
    console.log('from action creator');
    console.log(addedCommentLocal);
    let notifyToUserId = null;
    let questionIdOfComment = null;
    return (
        (dispatch) => {
            AxiosInstance.post('/answers/' + answerId + '/comments' + '.json?auth=' + token, addedCommentLocal)
                .then(outerResponse => {

                    AxiosInstance.get('/answers/' + answerId + '.json?auth=' + token).then(
                        response => {
                            notifyToUserId = response.data.userId;
                            questionIdOfComment = response.data.questionId;
                            console.log(response);
                            dispatch(saveCommentSuccess(outerResponse));
                            dispatch(saveCommentToUser(answerId, token));
                            dispatch(saveNotificationToUser(notifyToUserId,questionIdOfComment,answerId,token));
                        }
                    );

                    // console.log(response);
                    // dispatch(saveCommentSuccess(response));
                    // dispatch(saveCommentToUser(answerId, token));

                })
                .catch(error => {
                    dispatch(saveCommentFail(error));
                });
        }
    );
}


// export const saveComment = (addedComment, token, answerId) => {
//     let addedCommentLocal = {...addedComment};
//     console.log('from action creator');
//     console.log(addedCommentLocal);
//     return(
//         (dispatch)  => {
//             AxiosInstance.post('/answers/'+answerId+'/comments'+'.json?auth='+token, addedCommentLocal)
//             .then(response => {
//                 console.log(response);
//                 dispatch(saveCommentSuccess(response));
//                 dispatch(saveCommentToUser(answerId, token));
//             })
//             .catch(error => {
//                 dispatch(saveCommentFail(error));
//             });
//         }
//     );
// }