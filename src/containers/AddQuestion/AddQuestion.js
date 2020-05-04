import React, { Component } from 'react';
import classes from './AddQuestion.module.css';
import Navbar from '../../components/UI/Navbar/Navbar.js';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index.js';
import {Redirect} from 'react-router-dom';
class AddQuestion extends Component {
    
    token = localStorage.getItem('token');
    userId = localStorage.getItem('userId');

    state={
        question: null,
        tag: null
    };

    onChangeHandler = (event, inputType) => {
        if(inputType === 'question'){
            this.setState(
                {
                    ...this.state,
                    question: event.target.value
                }
            );
        }
    };

    onClickHandler = (event) => {
        this.setState({
            ...this.state,
            tag: event.target.text
        });
    };

    submitHandler = () => {
       const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
        console.log(this.state);
        let askedQuestion = {
            question: this.state.question,
            tag: this.state.tag,
            userId: userId,
            date: (Date(Date.now())).toString(),
            noOfAnswers: 0,
            noOfInsightfuls: 0
        };
        console.log(askedQuestion);
    
            this.props.onSaveQuestion(askedQuestion, token);
    }

    render() {
        let addQuestion = null;
        this.props.onAuthCheckState();
        if(localStorage.getItem('token')){
            addQuestion = (<div>
                <Navbar />
                <div>
                <InputGroup style={{ width: '50%', margin: 'auto',  marginTop: '5%' }}>
                    <InputGroup.Prepend >
                        <InputGroup.Text>Question</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={this.state.value} onChange={(event) => {this.onChangeHandler(event, 'question')}} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <DropdownButton variant="warning" title="Tags" style={{marginTop: '3%', marginLeft: '-46%'}} > 
                    <Dropdown.Item id="Ophthalmology" onClick={(event) => {this.onClickHandler(event)}}>Ophthalmology</Dropdown.Item>
                    <Dropdown.Item id="Cardiology" onClick={(event) => {this.onClickHandler(event)}} >Cardiology</Dropdown.Item>
                    <Dropdown.Item  id="ENT" onClick={(event) => {this.onClickHandler(event)}} >ENT</Dropdown.Item>
                </DropdownButton>
    
                <Button variant="warning" style={{marginTop: '3%', width:'100px'}} onClick={this.submitHandler} >ADD</Button>
                </div>
            </div>);
        }
       
        else{
            addQuestion = <Redirect to='/' />
        }
            if(this.props.savedQuestion){
                addQuestion = <Redirect to='/home' />
            }

        return (
            addQuestion
        );
    }
}

const mapStateToProps = (state) => {
    return({
        savedQuestion: state.saveQuestion.savedQuestion,
        loggedIn: state.login.loggedIn
    });
};

const mapDispatchToProps = (dispatch) => {
    return(
        {
            onSaveQuestion: (askedQuestion, token) => {dispatch(actions.saveQuestion(askedQuestion, token))},
            onAuthCheckState: () => {dispatch(actions.authCheckState())}

        }
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
