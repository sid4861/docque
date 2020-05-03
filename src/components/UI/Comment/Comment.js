import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Comment.module.css';
import Axios from '../../../hoc/axios/instance.js';

// const Comment = (props) => {

//     return(
//         <Container style={{marginTop: '2%'}}>
//         <Row className={classes.Content} > {props.content} </Row>
//         <Row className={classes.Date} style={{marginTop: '1%'}}> {new Date(props.date).toDateString()} </Row>
//     </Container>
//     );

// };


class Comment extends Component {

    token = localStorage.getItem('token');
    state = { firstName: null }

    componentDidMount() {
        const queryParams = '?auth=' + this.token + '&orderBy="userID"&equalTo="' + this.props.userId + '"';
        Axios.get('/users.json' + queryParams).then(
            response => {
                //this.firstName = response.data[Object.keys(response.data)[0]].firstName;
                //      console.log('first name = '+response);
                this.setState({ ...this.state, firstName: response.data[Object.keys(response.data)[0]].firstName });
            }
        );
    }

    render() {

        let c = <p>Loading...</p>
        if (this.state.firstName !== null) {

            c = (
                <Container style={{ marginTop: '2%' }}>
                    <Row>
                        <Col className={classes.Content} > {this.props.content}  </Col>
                        <Col className={classes.Date} >  Comment by:  {this.state.firstName} </Col>
                    </Row>
                    <Row className={classes.Date} style={{ marginTop: '1%' }}> {new Date(this.props.date).toDateString()} </Row>
                </Container>
            );
        }
        return (c);
    }
}

export default Comment;