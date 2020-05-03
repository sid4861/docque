import React from 'react';
import classes from './QuestionAnswer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const QuestionAnswer = (props) => {
    console.log(props.qaAsProps);
    return (
        <Link to={'/question/' + props.qIdAsProps} >
            <Container style={{
                marginTop: '4%',
                background: '#FFFFFF',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                padding: '30px'
            }} >
                <Row >
                    <Col md={10} className={classes.Question}  > {props.qaAsProps.question.question} </Col>
                    <Col md={2} className={classes.Date} >{new Date(props.qaAsProps.question.date).toDateString()}</Col>
                </Row>

                <Row style={{ marginTop: '3%' }}>
                    <Col className={classes.Noa} >Number of answers: {props.qaAsProps.question.noOfAnswers}</Col>
                    <Col className={classes.Noi} >No. of people who find this insightful: {props.qaAsProps.question.noOfInsightfuls}</Col>
                    <Col className={classes.Tag} > Tag: {props.qaAsProps.question.tag}</Col>
                </Row>


            </Container>
        </Link>


    );
};

export default QuestionAnswer;