import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Answer.module.css';

const Answer = (props) => {
    return (
        <Container style={{ marginTop: '10%' }} >
            <Row >
                <Col md={2} className={classes.Noi} >No. of people who find this insightful: {props.noi}</Col>
                <Col md={10} className={classes.Answer}  >{props.title} </Col>
            </Row>

            <Row style={{ marginTop: '3%' }}>
                <Col className={classes.Date} >{new Date(props.date).toDateString()}</Col>
            </Row>
        </Container>
    );
}

export default Answer;