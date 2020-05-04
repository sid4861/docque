import AxiosInstance from '../../hoc/axios/instance.js';
import * as actionTypes from './actionTypes.js';

const userId = localStorage.getItem('userId');

export const notificationDeleteSuccess = (response) => {
    return({
        type: actionTypes.NOTIFICATION_DELETE_SUCCESS,
        response: response
    });
};

export const notificationDeleteFail = (error) => {
    return({
        type: actionTypes.NOTIFICATION_DELETE_FAIL,
        error: error
    });
};

export const notificationDelete = (notificationId, token) => {
    return(
        (dispatch)  => {
            const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + userId + '"';
            AxiosInstance.get('/users.json'+queryParams).then(
                response => {
                    AxiosInstance.delete('/users/'+Object.keys(response.data)[0]+'/notifications/'+notificationId+'.json').then(
                        innerResponse => {
                            dispatch(notificationDeleteSuccess(innerResponse));
                        }
                    );
                    
                }
            ).catch(
                err => {
                    console.log(err);
                   dispatch(notificationDeleteFail(err));
                }
            );
        }
    );
}