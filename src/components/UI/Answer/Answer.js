import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Answer.module.css';
import {Link} from 'react-router-dom';
import Comments from './Comments/Comments.js';

const Answer = (props) => {
    
    console.log(props.commentsFromAnswers);
    return (
        <Container style={{ marginTop: '6%' }} >
            <Row >
                <Col md={2} className={classes.Noi} >No. of people who find this insightful: {props.noi}</Col>
                <Col md={10} className={classes.Answer}  >{props.title} </Col>
            </Row>

            <Row style={{ marginTop: '3%' }}>
            <Link to={'/question/'+props.questionId+'/answer/'+props.answerKey+'/add/comment'} className={classes.AddComment}> <Col md={2}  >comment</Col> </Link> 
                <Col md={2} className={classes.Date} >{new Date(props.date).toDateString()}</Col>
            </Row>
            <Row style={{ marginTop: '6%' }} className={classes.CommentsHeading} >Comments</Row>
            <Container style={{ marginTop: '6%' }} >
                <Comments commentsFromAnswer={props.commentsFromAnswers} />
            </Container>
            <div className={classes.Divider} ></div>
        </Container>
    );
}

export default Answer;