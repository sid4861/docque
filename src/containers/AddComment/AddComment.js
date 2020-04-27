import React, {Component} from 'react';
import Navbar from '../../components/UI/Navbar/Navbar.js';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index.js';
import {Redirect} from 'react-router-dom';

class AddComment extends Component{

    token = localStorage.getItem('token');
    userId = localStorage.getItem('userId');

    state={
        comment: null
    };

    onChangeHandler = (event) => {
        
            this.setState(
                {
                    ...this.state,
                    comment: event.target.value
                }
            );
        
    };


    submitHandler = () => {
       const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
        console.log(this.state);
        let addedComment = {
            comment: this.state.comment,
            userId: userId,
            date: (Date(Date.now())).toString(),
        };
        console.log(addedComment);
    
            this.props.onSaveComment(addedComment, token, this.props.match.params.id);
    }

    render(){
        let addComment = null;
        this.props.onAuthCheckState();
        if(localStorage.getItem('token')){
            addComment = (<div>
                <Navbar />
                <div>
                <InputGroup style={{ width: '50%', margin: 'auto',  marginTop: '5%' }}>
                    <InputGroup.Prepend >
                        <InputGroup.Text>Comment</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={(event) => {this.onChangeHandler(event)}} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Button variant="warning" style={{marginTop: '3%', width:'100px'}} onClick={this.submitHandler} >ADD</Button>
                </div>
            </div>);
        }
       
        else{
            addComment = <Redirect to='/' />
        }
            if(this.props.savedComment){
                addComment = <Redirect to={'/question/'+this.props.match.params.questionId} />
            }

        return (
            addComment
        );
    }
}

const mapStateToProps = (state) => {
    return({
        savedComment: state.saveComment.savedComment,
        loggedIn: state.login.loggedIn
    });
};

const mapDispatchToProps = (dispatch) => {
    return(
        {
            onSaveComment: (addedComment, token, answerId) => {dispatch(actions.saveComment(addedComment, token, answerId))},
            onAuthCheckState: () => {dispatch(actions.authCheckState())}

        }
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);