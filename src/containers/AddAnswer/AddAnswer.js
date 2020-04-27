import React, {Component} from 'react';
import Navbar from '../../components/UI/Navbar/Navbar.js';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index.js';
import {Redirect} from 'react-router-dom';

class AddAnswer extends Component{

    token = localStorage.getItem('token');
    userId = localStorage.getItem('userId');

    state={
        answer: null
    };

    onChangeHandler = (event) => {
        
            this.setState(
                {
                    ...this.state,
                    answer: event.target.value
                }
            );
        
    };


    submitHandler = () => {
       const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
        console.log(this.state);
        let addedAnswer = {
            answer: this.state.answer,
            userId: userId,
            date: (Date(Date.now())).toString(),
            noOfInsightfuls: 0,
            questionId: this.props.match.params.id
        };
        console.log(addedAnswer);
    
            this.props.onSaveAnswer(addedAnswer, token);
            this.props.history.push('/question/'+this.props.match.params.id);
    }

    render(){
        let addAnswer = null;
        this.props.onAuthCheckState();
        if(localStorage.getItem('token')){
            addAnswer = (<div>
                <Navbar />
                <div>
                <InputGroup style={{ width: '50%', margin: 'auto',  marginTop: '5%' }}>
                    <InputGroup.Prepend >
                        <InputGroup.Text>Answer</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={(event) => {this.onChangeHandler(event)}} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Button variant="warning" style={{marginTop: '3%', width:'100px'}} onClick={this.submitHandler} >ADD</Button>
                </div>
            </div>);
        }
       
        else{
            addAnswer = <Redirect to='/' />
        }
            // if(this.props.savedAnswer){
            //     addAnswer = <Redirect to={'/question/'+this.props.match.params.id} />
            // }

        return (
            addAnswer
        );
    }
}

const mapStateToProps = (state) => {
    return({
        savedAnswer: state.saveAnswer.savedAnswer,
        loggedIn: state.login.loggedIn
    });
};

const mapDispatchToProps = (dispatch) => {
    return(
        {
            onSaveAnswer: (addedAnswer, token) => {dispatch(actions.saveAnswer(addedAnswer, token))},
            onAuthCheckState: () => {dispatch(actions.authCheckState())}

        }
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAnswer);