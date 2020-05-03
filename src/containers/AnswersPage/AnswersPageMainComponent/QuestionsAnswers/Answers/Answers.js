import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Answers.module.css';
import Comments from './Comments/Comments.js';

const Answers = (props) => {

    console.log(props.answersAsProps);
    let answers = props.answersAsProps.map(answer => {
        return(
            <Container style={{ marginTop: '6%' }} >
            <Row >
                <Col md={2} className={classes.Noi} >No. of people who find this insightful: {answer.answerNoOfInsightfuls}</Col>
                <Col md={10} className={classes.Answer}  >{answer.answerAnswer} </Col>
            </Row>

            <Row style={{ marginTop: '3%' }}>
            {/* <Link to={'/question/'+props.questionId+'/answer/'+props.answerKey+'/add/comment'} className={classes.AddComment}> <Col md={2}  >comment</Col> </Link>  */}
                <Col md={2} className={classes.Date} >{new Date(answer.answerDate).toDateString()}</Col>
            </Row>
            <Row style={{ marginTop: '6%' }} className={classes.CommentsHeading} >Comments</Row>
            <Container style={{ marginTop: '6%' }} >
                <Comments commentsFromAnswer={answer.answerComments} />
            </Container>
            <div className={classes.Divider} ></div>
        </Container> 
        )
    });

    return(answers);
};

export default Answers;