import React, {Component} from 'react';
import NavbarComponent from '../../components/UI/Navbar/Navbar.js';
import { connect } from 'react-redux';
import QuestionPageMainComponent from './QuestionPageMainComponent/QuestionPageMainComponent.js';

class QuestionPage extends Component{

    render(){

        return(
            <div>
                <NavbarComponent />
                <QuestionPageMainComponent questionId={this.props.match.params.id} token={this.props.token}/>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return ({
        token: state.login.token,
        userId: state.login.userId,
        loggedIn: state.login.loggedIn
    });
};


export default connect(mapStateToProps, null)(QuestionPage);