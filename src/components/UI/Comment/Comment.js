import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Comment = (props) => {

    return(
        <Container style={{marginTop: '3%'}}>
        <Row> {props.content} </Row>
        <Row> {props.date} </Row>
    </Container>
    );

};

export default Comment;