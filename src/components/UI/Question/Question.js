import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Question.module.css';
import {Link} from 'react-router-dom';
const Question = (props) => {
    return (
        <Link to={'/question/'+props.questionKey}>
        <Container style={{marginTop: '10%'}} > 
            <Row >  
                <Col md={10} className={classes.Question}  >{props.title} </Col>
                <Col md={2} className={classes.Date} >{new Date(props.date).toDateString()}</Col>
            </Row>

            <Row style={{marginTop: '3%'}}>
                <Col className={classes.Noa} >Number of answers: {props.noa}</Col>
                <Col className={classes.Noi} >No. of people who find this insightful: {props.noi}</Col>
                <Col className={classes.Tag} > Tag: {props.tag}</Col>
            </Row>    
        </Container>
        </Link>
    );
}

export default Question;