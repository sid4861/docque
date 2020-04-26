import React, { Component } from 'react';
import Question from '../../../components/UI/Question/Question.js';
import axios from '../../../hoc/axios/instance.js';
import * as actions from '../../../store/actions/index.js';
import { connect } from 'react-redux';
import * as _ from 'underscore';

class Questions extends Component {

    state = { questions: [] }; // before {questions: {}}

    yourQuestionsRecent = (token, userId) => {

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date');
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }
        );

    };

    yourQuestionsOlder = (token, userId) => {

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date').reverse();
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }
        );

    };

    browseQuestionsRecent = (token) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date');
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }

        );
    };

    browseQuestionsOlder = (token) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date').reverse();
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }

        );
    };

    browseQuestionsMostAnswers = (token) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfAnswers').reverse();
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }

        );
    };

    yourQuestionsMostAnswers = (token, userId) => {
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfAnswers').reverse();
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }
        );
    };

    browseQuestionsMostInsightfuls = (token) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }

        );
    };

    yourQuestionsMostInsightfuls = (token, userId) => {
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push(response.data[key]);
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }
        );
    };


    componentDidMount() {
        console.log('inside componentDidMount')
        this.props.onAuthCheckState();
        if (localStorage.getItem('token')) {
            let userId = localStorage.getItem('userId');
            let token = localStorage.getItem('token');
            if (this.props.dataFilter === 'yourQuestions') { // 1 if start

                const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
                axios.get('/questions.json' + queryParams).then(
                    response => {
                        console.log('reading questions');
                        console.log(response);
                        ///sorting by date, most recent, logic

                        let responseArray = [];
                        Object.keys(response.data).map((key) => {
                            responseArray.push(response.data[key]);
                        });
                        console.log('response array');
                        console.log(responseArray);
                        let responseArraySorted = _.sortBy(responseArray, 'date');
                        console.log('response array sorted');
                        console.log(responseArraySorted);
                        ///
                        this.setState({
                            ...this.state,
                            questions: responseArraySorted    // before response.data
                        });

                    }
                );
            }   // 1 if end

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('inside componentDidUpdate');
        console.log('this.props');
        console.log(this.props.dataFilter);
        console.log('prevProps');
        console.log(prevProps.dataFilter);
        if (prevProps.dataFilter !== this.props.dataFilter) {
            this.props.onAuthCheckState();
            if (localStorage.getItem('token')) {
                let userId = localStorage.getItem('userId');
                let token = localStorage.getItem('token');
                if (this.props.dataFilter === 'browseQuestions') {
                    if (this.props.dataSort === 'Older') {
                        this.browseQuestionsOlder(token);
                    }
                    else if(this.props.dataSort === 'Recent') {
                        this.browseQuestionsRecent(token);
                    }
                    else if(this.props.dataSort === 'Most Answers') {
                        this.browseQuestionsMostAnswers(token);
                    }
                    else if(this.props.dataSort === 'Most Insightful') {
                        this.browseQuestionsMostInsightfuls(token);
                    }

                }
                else if (this.props.dataFilter === 'yourQuestions') {
                    if (this.props.dataSort === 'Older') {
                        this.yourQuestionsOlder(token, userId);
                    }
                    else if(this.props.dataSort === 'Recent'){
                        this.yourQuestionsRecent(token, userId);
                    }
                    else if(this.props.dataSort === 'Most Answers') {
                        this.yourQuestionsMostAnswers(token, userId);
                    }
                    else if(this.props.dataSort === 'Most Insightful') {
                        this.yourQuestionsMostInsightfuls(token, userId);
                    }
                }
            }
        }
        /////// if if datafilter props are equal, i.e, just filtering.
        else {
            this.props.onAuthCheckState();
            if (localStorage.getItem('token')) {
                let userId = localStorage.getItem('userId');
                let token = localStorage.getItem('token');

                if (this.props.dataSort === 'Older' && this.props.dataSort !== prevProps.dataSort) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsOlder(token);
                    } else {
                        this.yourQuestionsOlder(token, userId);
                    }
                }
                else if (this.props.dataSort === 'Recent' && this.props.dataSort !== prevProps.dataSort) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsRecent(token);
                    } else {
                        this.yourQuestionsRecent(token, userId);
                    }
                }

                else if (this.props.dataSort === 'Most Answers' && this.props.dataSort !== prevProps.dataSort) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsMostAnswers(token);
                    } else {
                        this.yourQuestionsMostAnswers(token, userId);
                    }
                }

                else if (this.props.dataSort === 'Most Insightful' && this.props.dataSort !== prevProps.dataSort) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsMostInsightfuls(token);
                    } else {
                        this.yourQuestionsMostInsightfuls(token, userId);
                    }
                }

            }
        }
    }

    render() {

        let questionsVariable = null;
        questionsVariable = this.state.questions.map(question => {
            return (
                <Question
                    title={question.question}
                    noa={question.noOfAnswers}
                    tag={question.tag}
                    noi={question.noOfInsightfuls}
                    date={question.date}
                />
            );
        });

        return (questionsVariable);
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
export default connect(mapStateToProps, mapDispatchToProps)(Questions);