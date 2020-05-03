import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Answer.module.css';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments.js';
import Axios from '../../../hoc/axios/instance.js';

// const Answer = (props) => {

//     console.log(props.commentsFromAnswers);
//     return (
//         <Container style={{ marginTop: '6%' }} >
//             <Row >
//                 <Col md={2} className={classes.Noi} >No. of people who find this insightful: {props.noi}</Col>
//                 <Col md={10} className={classes.Answer}  >{props.title} </Col>
//             </Row>

//             <Row style={{ marginTop: '3%' }}>
//             <Link to={'/question/'+props.questionId+'/answer/'+props.answerKey+'/add/comment'} className={classes.AddComment}> <Col md={2}  >comment</Col> </Link> 
//                 <Col md={2} className={classes.Date} >{new Date(props.date).toDateString()}</Col>
//             </Row>
//             <Row style={{ marginTop: '6%' }} className={classes.CommentsHeading} >Comments</Row>
//             <Container style={{ marginTop: '6%' }} >
//                 <Comments commentsFromAnswer={props.commentsFromAnswers} />
//             </Container>
//             <div className={classes.Divider} ></div>
//         </Container>
//     );
// }

class Answer extends Component {

    token = localStorage.getItem('token');

    state = { firstName: null };

    componentDidMount() {

        const queryParams = '?auth=' + this.token + '&orderBy="userID"&equalTo="' + this.props.userId + '"';
        Axios.get('/users.json'+queryParams).then(
            response => {
                //this.firstName = response.data[Object.keys(response.data)[0]].firstName;
                //      console.log('first name = '+response);
                this.setState({ ...this.state, firstName: response.data[Object.keys(response.data)[0]].firstName });
            }
        );
    }

    render() {

        let a = <p>Loading...</p>
        if (this.state.firstName !== null) {
            a = (<Container style={{ marginTop: '6%' }} >
                <Row >
                    <Col md={1} className={classes.Noi} >No. of people who find this insightful: {this.props.noi}</Col>
                    <Col md={10} className={classes.Answer}  >{this.props.title} </Col>
                    <Col md={1} className={classes.Noi}  >Answer by: {this.state.firstName} </Col>
                </Row>

                <Row style={{ marginTop: '3%' }}>
                    <Link to={'/question/' + this.props.questionId + '/answer/' + this.props.answerKey + '/add/comment'} className={classes.AddComment}> <Col md={2}  >comment</Col> </Link>
                    <Col md={2} className={classes.Date} >{new Date(this.props.date).toDateString()}</Col>
                </Row>
                <Row style={{ marginTop: '6%' }} className={classes.CommentsHeading} >Comments</Row>
                <Container style={{ marginTop: '6%' }} >
                    <Comments commentsFromAnswer={this.props.commentsFromAnswers} />
                </Container>
                <div className={classes.Divider} ></div>
            </Container>);
        }
        return (a);
    }
}

export default Answer;