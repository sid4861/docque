import React, { Component } from 'react';
import Axios from '../../../hoc/axios/instance.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import Questions from './Questions/Questions.js';

class UserProfileMainComponent extends Component {

    token = localStorage.getItem('token');

    state = {
        user: null,
        dataSort: 'Recent'
    };


    componentDidMount() {
        console.log(this.props.userId);

        const queryParams = '?auth=' + this.token + '&orderBy="userID"&equalTo="' + this.props.userId + '"';
        Axios.get('/users.json' + queryParams).then(
            response => {
                console.log(response.data[Object.keys(response.data)[0]]);
                this.setState({
                    ...this.state,
                    user: response.data[Object.keys(response.data)[0]]
                });
            }
        );
    }

    onHomeSelectHandler = (event) => {
        this.props.history.push('/home');
    }



    render() {

        let up = <p>Loading...</p>
        let component = null;
        let questionsVariable = <Questions  userId={this.props.userId} dataSort={this.state.dataSort} />; 

        if (this.state.user !== null) {
            up = (<div style={{ marginTop: '2%' }} >
                <p>Dr. {this.state.user.firstName} {this.state.user.lastName} ,{this.state.user.highestQualification} </p>
                <p> Resides in : {this.state.user.country} </p>
                <p> contact - {this.state.user.email} </p>
            </div>);
            component = (
                <div>
                    {up}
                    <Container style={{ marginTop: '2%' }} >
                        <Row>
                            <Col><Button variant="warning" onClick={(event) => { this.onHomeSelectHandler(event) }} >Home</Button></Col>
                            <Col><Button variant="warning" onClick={(event) => { this.onSelectHandler(event, 'questions') }} > Dr. {this.state.user.firstName}'s Questions </Button></Col>
                            <Link to={'/'+this.props.userId + '/answers'} > <Col><Button variant="warning">Dr. {this.state.user.firstName}'s Answers</Button></Col> </Link>
                            {/* <ButtonGroup>
                                <Col>
                                    <DropdownButton style={{ float: 'left', width: '50%' }} variant="warning" title="Filter" style={{ marginTop: '3%', marginLeft: '-46%' }} >
                                        <Dropdown.Item id="Recent" onClick={(event) => { this.onClickHandler(event) }}>Recent</Dropdown.Item>
                                        <Dropdown.Item id="Older" onClick={(event) => { this.onClickHandler(event) }} >Older</Dropdown.Item>
                                        <Dropdown.Item id="Most Answers" onClick={(event) => { this.onClickHandler(event) }} >Most Answers</Dropdown.Item>
                                        <Dropdown.Item id="Most insightful" onClick={(event) => { this.onClickHandler(event) }}>Most Insightful</Dropdown.Item>
                                    </DropdownButton>
                                </Col>

                            </ButtonGroup> */}
                        </Row>

                    </Container>
                    {questionsVariable}
                </div>

            );
        }
        return (
            component
        );

    }
}

export default withRouter(UserProfileMainComponent);