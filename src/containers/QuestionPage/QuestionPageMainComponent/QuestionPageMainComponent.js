import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {withRouter, Link} from 'react-router-dom';
import axios from '../../../hoc/axios/instance.js';
import classes from './QuestionPageMainComponent.module.css';
import Answers from './Answers/Answers.js';

class QuestionPageMainComponent extends Component {

    token = localStorage.getItem('token');

    state = {
        question: null
    };

    firstName = null;
    userId = null;
    componentDidMount(){
        //this.props.questionId
        let token = localStorage.getItem('token');
        axios.get('/questions/'+this.props.questionId+'.json?auth='+token).then(
            response => {
                //console.log('clicked question');
               let responseData = response.data;
                this.userId = response.data.userId;
                //console.log('user id from question = '+userId);
                const queryParams = '?auth=' + this.token + '&orderBy="userID"&equalTo="' + this.userId + '"';
                axios.get('/users.json'+queryParams).then(
                    response => {
                        this.firstName = response.data[Object.keys(response.data)[0]].firstName;
                  //      console.log('first name = '+response);
                        this.setState({...this.state, question: responseData});
                    }
                );
               // this.setState({...this.state, question: response.data});
            }
        );

    }

    onSelectHandler = (event) => {
        this.props.history.push('/home');
    }

    render() {

        let qpmc = <p>loading</p>
        if(this.state.question !== null){
            qpmc = (
                <div>
            <Container style={{marginTop: '3%'}}>
                <Row>
                    <Col><Button variant="warning" onClick={(event) => { this.onSelectHandler(event) }} >Home</Button></Col>
                </Row>
            </Container>

            <Container style={{marginTop: '4%'}} > 
            <Row >  
                <Col md={10} className={classes.Question}  >{this.state.question.question} </Col>
                <Col md={2} className={classes.Date} >{new Date(this.state.question.date).toDateString()}</Col>
                <Col md={2} className={classes.Date} >Asked by :  <Link to={'/userprofile/'+this.userId} > {this.firstName} </Link> </Col>
            </Row>

            <Row style={{marginTop: '3%'}}>
                <Col className={classes.Noa} >Number of answers: {this.state.question.noOfAnswers}</Col>
                <Col className={classes.Noi} >No. of people who find this insightful: {this.state.question.noOfInsightfuls}</Col>
                <Col className={classes.Tag} > Tag: {this.state.question.tag}</Col>
            </Row>
            
            <Row style={{marginTop: '3%', marginLeft: '3.5%'}}>
                 <Link to={'/question/'+this.props.questionId+'/add/answer'} > <Col md={2} className={classes.AnswerQuestion} >Answer question</Col> </Link> 
            </Row>        
        </Container>

        <div className={classes.Divider}></div>

                <Answers questionId={this.props.questionId}/>

        </div>

            );
        }

        return (
            qpmc
        );

    }
}

export default withRouter(QuestionPageMainComponent);