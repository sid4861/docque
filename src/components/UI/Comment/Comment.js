import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from './Comment.module.css';

const Comment = (props) => {

    return(
        <Container style={{marginTop: '2%'}}>
        <Row className={classes.Content} > {props.content} </Row>
        <Row className={classes.Date} style={{marginTop: '1%'}}> {new Date(props.date).toDateString()} </Row>
    </Container>
    );

};

export default Comment;