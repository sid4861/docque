import React, { Component } from 'react';
import NavbarComponent from '../../components/UI/Navbar/Navbar.js';
import Greeting from './Greeting/Greeting.js';
import MainComponent from '../MainComponent/MainComponent.js';

import { connect } from 'react-redux';
class HomePage extends Component {

    render() {

        return (
            <div>
                <NavbarComponent />
                <Greeting />
                <MainComponent />
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

export default connect(mapStateToProps, null)(HomePage);