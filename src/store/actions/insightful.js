import AxiosInstance from '../../hoc/axios/instance.js';
import * as actionTypes from './actionTypes.js';

const userId = localStorage.getItem('userId');

export const incrementInsightfulSuccess = (response) => {
    return({
        type: actionTypes.INCREMENT_INSIGHTFUL_SUCCESS,
        response: response.data.name
    });
};

export const incrementInsightfulFail = (error) => {
    return({
        type: actionTypes.INCREMENT_INSIGHTFUL_FAIL,
        error: error
    });
};

export const incrementInsightful = (questionId, token) => {
    return(
        (dispatch)  => {
                AxiosInstance.get('/questions/'+questionId+'.json?auth='+token).then(
                    response => {
                        console.log(response.data);
                        let numberOfInsightfuls = response.data.noOfInsightfuls;
                        console.log(numberOfInsightfuls);
                        numberOfInsightfuls += 1;
                        AxiosInstance.patch('/questions/'+questionId+'.json?auth='+token, {noOfInsightfuls: numberOfInsightfuls});
                        dispatch(incrementInsightfulSuccess(response));
                    }
                ).catch(error => {
                    dispatch(incrementInsightfulFail(error));
                });
        }
    );
}