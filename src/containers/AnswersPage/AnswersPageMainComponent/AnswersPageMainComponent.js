import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter, Link } from 'react-router-dom';
import axios from '../../../hoc/axios/instance.js';
import classes from './AnswersPageMainComponent.module.css';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.js';
import Question from '../../../components/UI/Question/Question.js';

class AnswersPageMainComponent extends Component {

    userId = localStorage.getItem('userId');
    token = localStorage.getItem('token');

    state = {
        answers: []
    };
    answers = [];
    componentDidMount() {
        //this.props.questionId
        // const queryParams = '?auth=' + this.token + '&orderBy="userID"&equalTo="' + this.userId + '"';
        // axios.get('/users.json'+queryParams).then(
        //     response => {
        //         //console.log(response);
        //         let key = Object.keys(response.data)[0];
        //         axios.get('/users/'+key+'/answers.json?auth='+this.token).then(
        //             response => {
        //                 //console.log(response);
        //                 let answersIds = [];
        //                 Object.keys(response.data).map(
        //                     (key) => {
        //                         answersIds.push(key);
        //                     }
        //                 );
        //                 this.setState({
        //                     ...this.state,
        //                     answersIds: answersIds
        //                 });
        //                 console.log(this.state.answersIds);
        //             }
        //         );
        //     }
        // );

        axios.get('answers.json?auth=' + this.token).then(
            response => {
                Object.keys(response.data).map(
                    key => {
                        if (response.data[key]['userId'] === this.userId) {
                            this.answers.push(response.data[key]);
                        }
                    }
                  
                );
                console.log(this.answers);
                this.setState({
                    ...this.state,
                    answers: this.answers
                });
            }
        );

        

    }

    onSelectHandler = (event) => {
        this.props.history.push('/home');
    }

    render() {

        let apmc = <p>loading</p>
        if (this.state.answers.length > 0) {
            apmc = (
                <div>
                    <Container style={{ marginTop: '3%' }}>
                        <Row>
                            <Col><Button variant="warning" onClick={(event) => { this.onSelectHandler(event) }} >Home</Button></Col>
                        </Row>
                    </Container>


                    <QuestionsAnswers answers={this.state.answers} />

                </div>

            );
        }

        return (
            apmc
        );

    }
}

export default withRouter(AnswersPageMainComponent);