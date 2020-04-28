import React, { Component } from 'react';
import Question from '../../../components/UI/Question/Question.js';
import axios from '../../../hoc/axios/instance.js';
import * as actions from '../../../store/actions/index.js';
import { connect } from 'react-redux';
import * as _ from 'underscore';

class Questions extends Component {

    state = { questions: [] }; // before {questions: {}}

    // yourQuestionsRecent = (token, userId) => {

    //     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'date');
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }
    //     );

    // };

     //with tag

     yourQuestionsOlderWithTag = (token, userId, tag) => {

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date').reverse();
                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }

            }
        );

    };


    //with tag

    yourQuestionsRecentWithTag = (token, userId, tag) => {

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date');
                // console.log('response array sorted');
                // console.log(responseArraySorted);
                // this.setState({
                //     ...this.state,
                //     questions: responseArraySorted
                // });

                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }


            }
        );

    };

    // yourQuestionsOlder = (token, userId) => {

    //     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'date').reverse();
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }
    //     );

    // };

   
    // browseQuestionsRecent = (token) => {
    //     const queryParams = '?auth=' + token;
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'date');
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }

    //     );
    // };

    //with tag

    browseQuestionsRecentWithTag = (token, tag) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date');
                // console.log('response array sorted');
                // console.log(responseArraySorted);
                // this.setState({
                //     ...this.state,
                //     questions: responseArraySorted
                // });

                
                
                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }

            }

        );
    };

    // browseQuestionsOlder = (token) => {
    //     const queryParams = '?auth=' + token;
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'date').reverse();
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }

    //     );
    // };

    // with tag

    browseQuestionsOlderWithTag = (token, tag) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'date').reverse();
                // console.log('response array sorted');
                // console.log(responseArraySorted);
                // this.setState({
                //     ...this.state,
                //     questions: responseArraySorted
                // });

                
                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }


            }

        );
    };

    // browseQuestionsMostAnswers = (token) => {
    //     const queryParams = '?auth=' + token;
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'noOfAnswers').reverse();
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }

    //     );
    // };

    //with tag

    
    browseQuestionsMostAnswersWithTag = (token, tag) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfAnswers').reverse();
                console.log('response array sorted');
                // console.log(responseArraySorted);
                // this.setState({
                //     ...this.state,
                //     questions: responseArraySorted
                // });

                
                
                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }

            }

        );
    };


    //with tag

    yourQuestionsMostAnswersWithTag = (token, userId, tag) => {
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfAnswers').reverse();
                // console.log('response array sorted');
                // console.log(responseArraySorted);
                // this.setState({
                //     ...this.state,
                //     questions: responseArraySorted
                // });

                
                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }


            }
        );
    };



    // yourQuestionsMostAnswers = (token, userId) => {
    //     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'noOfAnswers').reverse();
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }
    //     );
    // };

    // browseQuestionsMostInsightfuls = (token) => {
    //     const queryParams = '?auth=' + token;
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }

    //     );
    // };

    //with tag

    
    browseQuestionsMostInsightfulsWithTag = (token, tag) => {
        const queryParams = '?auth=' + token;
        axios.get('/questions.json' + queryParams).then(
            response => {
                console.log('reading questions');
                console.log(response);
                let responseArray = [];
                Object.keys(response.data).map((key) => {
                    responseArray.push({ ...response.data[key], key: key });
                });
                console.log('response array');
                console.log(responseArray);
                let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
                // console.log('response array sorted');
                // console.log(responseArraySorted);
                // this.setState({
                //     ...this.state,
                //     questions: responseArraySorted
                // });

                
                if (tag === null || tag === undefined) {

                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });

                }
                else if (tag === 'All') {
                    console.log('response array sorted');
                    console.log(responseArraySorted);
                    this.setState({
                        ...this.state,
                        questions: responseArraySorted
                    });
                }

                else {
                    let responseArraySortedTagFiltered = [];
                    responseArraySorted.forEach((element) => {
                        if (element.tag === tag) {
                            responseArraySortedTagFiltered.push(element);
                        }
                    });

                    console.log('responseArraySortedTagFiltered');
                    console.log(responseArraySortedTagFiltered);
                    this.setState({
                        ...this.state,
                        questions: responseArraySortedTagFiltered
                    });
                }

            }

        );
    };    

    // yourQuestionsMostInsightfuls = (token, userId) => {
    //     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    //     axios.get('/questions.json' + queryParams).then(
    //         response => {
    //             console.log('reading questions');
    //             console.log(response);
    //             let responseArray = [];
    //             Object.keys(response.data).map((key) => {
    //                 responseArray.push({ ...response.data[key], key: key });
    //             });
    //             console.log('response array');
    //             console.log(responseArray);
    //             let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
    //             console.log('response array sorted');
    //             console.log(responseArraySorted);
    //             this.setState({
    //                 ...this.state,
    //                 questions: responseArraySorted
    //             });
    //         }
    //     );
    // };

// with tag
yourQuestionsMostInsightfulsWithTag = (token, userId, tag) => {
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('/questions.json' + queryParams).then(
        response => {
            console.log('reading questions');
            console.log(response);
            let responseArray = [];
            Object.keys(response.data).map((key) => {
                responseArray.push({ ...response.data[key], key: key });
            });
            console.log('response array');
            console.log(responseArray);
            let responseArraySorted = _.sortBy(responseArray, 'noOfInsightfuls').reverse();
            // console.log('response array sorted');
            // console.log(responseArraySorted);
            // this.setState({
            //     ...this.state,
            //     questions: responseArraySorted
            // });

            
            if (tag === null || tag === undefined) {

                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });

            }
            else if (tag === 'All') {
                console.log('response array sorted');
                console.log(responseArraySorted);
                this.setState({
                    ...this.state,
                    questions: responseArraySorted
                });
            }

            else {
                let responseArraySortedTagFiltered = [];
                responseArraySorted.forEach((element) => {
                    if (element.tag === tag) {
                        responseArraySortedTagFiltered.push(element);
                    }
                });

                console.log('responseArraySortedTagFiltered');
                console.log(responseArraySortedTagFiltered);
                this.setState({
                    ...this.state,
                    questions: responseArraySortedTagFiltered
                });
            }


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
                            responseArray.push({ ...response.data[key], key: key });
                        });
                        console.log('response array');
                        console.log('-------------------------');
                        console.log(responseArray);
                        console.log('-------------------------');
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
                        // trying tag
                        this.browseQuestionsOlderWithTag(token, this.props.tagFilter);
                    }
                    else if (this.props.dataSort === 'Recent') {
                        //trying tag
                        this.browseQuestionsRecentWithTag(token, this.props.tagFilter);
                    }
                    else if (this.props.dataSort === 'Most Answers') {
                        //trying tag
                        this.browseQuestionsMostAnswersWithTag(token, this.props.tagFilter);
                    }
                    else if (this.props.dataSort === 'Most Insightful') {
                        //trying tag
                        this.browseQuestionsMostInsightfulsWithTag(token, this.props.tagFilter);
                    }

                }
                else if (this.props.dataFilter === 'yourQuestions') {
                    if (this.props.dataSort === 'Older') {
                        this.yourQuestionsOlderWithTag(token, userId, this.props.tagFilter);
                    }
                    else if (this.props.dataSort === 'Recent') {
                        this.yourQuestionsRecentWithTag(token, userId, this.props.tagFilter);
                    }
                    else if (this.props.dataSort === 'Most Answers') {
                        this.yourQuestionsMostAnswersWithTag(token, userId, this.props.tagFilter);
                    }
                    else if (this.props.dataSort === 'Most Insightful') {
                        this.yourQuestionsMostInsightfulsWithTag(token, userId, this.props.tagFilter);
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

                if ((this.props.dataSort === 'Older' && this.props.dataSort !== prevProps.dataSort) || ((this.props.dataSort === 'Older') && (this.props.tagFilter !== null) && (this.props.tagFilter !== prevProps.tagFilter))) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        //trying tag
                        this.browseQuestionsOlderWithTag(token, this.props.tagFilter);
                    } else {
                        // trying tag filter on this
                        this.yourQuestionsOlderWithTag(token, userId, this.props.tagFilter);
                    }
                }
                else if ((this.props.dataSort === 'Recent' && this.props.dataSort !== prevProps.dataSort) ||  ((this.props.dataSort === 'Recent') && (this.props.tagFilter !== null) && (this.props.tagFilter !== prevProps.tagFilter))) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsRecentWithTag(token, this.props.tagFilter);
                    } else {
                        //// trying tag filter on this
                        this.yourQuestionsRecentWithTag(token, userId, this.props.tagFilter);
                    }
                }

                else if ((this.props.dataSort === 'Most Answers' && this.props.dataSort !== prevProps.dataSort) ||  ((this.props.dataSort === 'Most Answers') && (this.props.tagFilter !== null) && (this.props.tagFilter !== prevProps.tagFilter))) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsMostAnswersWithTag(token, this.props.tagFilter);
                    } else {
                        // trying tag
                        this.yourQuestionsMostAnswersWithTag(token, userId, this.props.tagFilter);
                    }
                }

                else if ((this.props.dataSort === 'Most Insightful' && this.props.dataSort !== prevProps.dataSort) ||  ((this.props.dataSort === 'Most Insightful') && (this.props.tagFilter !== null) && (this.props.tagFilter !== prevProps.tagFilter)) ) {
                    if (this.props.dataFilter === 'browseQuestions') {
                        this.browseQuestionsMostInsightfulsWithTag(token, this.props.tagFilter);
                    } else {
                        //trying tag
                        this.yourQuestionsMostInsightfulsWithTag(token, userId, this.props.tagFilter);
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
                    key={question.key}
                    questionKey={question.key}
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