import React, { Component } from 'react';
import axios from '../../../../hoc/axios/instance.js';
import * as _ from 'underscore';
import QuestionAnswer from '../../../../components/UI/QuestionAnswer/QuestionAnswer.js';
import Answers from './Answers/Answers.js';

class QuestionsAnswers extends Component {

    token = localStorage.getItem('token');

    constructor(props) {
        super(props);
        console.log('in constructor');
        this.state = {content: {}};
        this.questionsIds = [];
        this.content = {};
        this.props.answers.map(answer => {
            if (!this.questionsIds.includes(answer['questionId'])) {
                this.questionsIds.push(answer['questionId']);
            }
        });
        console.log(this.questionsIds);
        console.log(this.props.answers);
        this.questionsIds.map(qid => {
            this.content[qid] = {
                question: null,
                answers: []
            };
            this.props.answers.map(answer => {
                if (answer['questionId'] === qid) {
                    console.log(answer['questionId']);
                    this.content[qid].answers.push({
                        answerDate: answer.date,
                        answerNoOfInsightfuls: answer.noOfInsightfuls,
                        answerAnswer: answer.answer,
                        answerComments: answer.comments
                    });
                }
            });
            console.log(this.content);
        });
    }

    componentDidMount(){

        console.log('inside componentdidmount');
        console.log(this.content);

        axios.get('/questions.json?auth='+this.token).then(
            response => {
                Object.keys(response.data).map(outerKey => {
                    Object.keys(this.content).map(innerKey => {
                        if(innerKey === outerKey){
                            this.content = {...this.content, [innerKey]: {
                                ...this.content[innerKey],
                                question: {
                                    question: response.data[innerKey].question,
                                    tag: response.data[innerKey].tag,
                                    noOfInsightfuls: response.data[innerKey].noOfInsightfuls,
                                    noOfAnswers: response.data[innerKey].noOfAnswers,
                                    date: response.data[innerKey].date
                                }
                            }};
                        }
                    });
                });
                console.log(this.content);
                this.setState({
                    ...this.state,
                    content: {...this.content}
                });
                console.log('state');
                console.log(this.state);
            }
        );
        
    }

    render() {
        //console.log(this.content);
        if(_.isEmpty(this.state.content)){
            return(<p>loading...</p>);
        }
        else{
            let qa = null
            qa = Object.keys(this.state.content).map(key => {
                return(
                    <div>
                        <QuestionAnswer qaAsProps = {this.state.content[key]} qIdAsProps = {key} />
                        <Answers answersAsProps = {this.state.content[key]['answers']} />
                    </div>
                    
                );
            });
            return qa
        }
    }
}

export default QuestionsAnswers;