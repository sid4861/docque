import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from '../../../../hoc/axios/instance.js';
import * as actions from '../../../../store/actions/index.js';
import * as _ from 'underscore';
import Answer from '../../../../components/UI/Answer/Answer.js';

class Answers extends Component{

    state = {
        answers: []
    };

    componentDidMount(){
        console.log('inside componentDidMount')
        this.props.onAuthCheckState();
        if (localStorage.getItem('token')) {
            let userId = localStorage.getItem('userId');
            let token = localStorage.getItem('token');
                const queryParams = '?auth=' + token + '&orderBy="questionId"&equalTo="' + this.props.questionId + '"';
                axios.get('/answers.json' + queryParams).then(
                    response => {
                        console.log('reading answers');
                        console.log(response);
                        ///sorting by date, most recent, logic

                        let responseArray = [];
                        Object.keys(response.data).map((key) => {
                            responseArray.push({...response.data[key], key: key});
                        });
                        console.log('response array');
                        console.log('-------------------------');
                        console.log(responseArray);
                        console.log('-------------------------');
                        let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
                        console.log('response array sorted');
                        console.log(responseArraySorted);
                        ///
                        this.setState({
                            ...this.state,
                            answers: responseArraySorted    // before response.data
                        });

                    }
                );

        }

    }

    render(){
        let ans = <p>Loading...</p>

        if(this.state.answers.length > 0){
            ans = this.state.answers.map((answer) => {
                return(
                    <Answer 
                    title={answer.answer}
                    noi={answer.noOfInsightfuls}
                    date={answer.date}
                    />
                );
            });
        }
        return(
            ans
        );
    }

}

const mapStateToProps = (state) => {
    return ({
        loggedIn: state.login.loggedIn
    });
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onAuthCheckState: () => { dispatch(actions.authCheckState()) },

        }
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);