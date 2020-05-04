import React, { Component } from 'react';
import classes from './Login.module.css';
import Form from 'react-bootstrap/Form';
import LogoImage from '../../../assets/images/doctor-emoji-png-11-transparent.png';
import * as actions from '../../../store/actions/index.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {

        email: null,
        password: null
    };

    componentDidMount() {
        document.body.style.background = 'linear-gradient(90deg, #F7CE68 0%, #FBAB7E 100%), #C4C4C4';
        document.body.style.width = '100%';
        document.body.style.margin = '0';
        document.body.style.height = '100%';
    }

    componentWillUnmount() {
        document.body.style.background = 'white';
    }

    inputChangedHandler = (event, inputType) => {
        switch (inputType) {
            case 'email':
                this.setState({
                    ...this.state,
                    email: event.target.value
                });
                break;
            case 'password':
                this.setState({
                    ...this.state,
                    password: event.target.value
                });
                break;

            default:
                return null;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.email !== null && this.state.password !== null && this.state.password.length >= 6) {
            this.props.onLogin(this.state.email, this.state.password);
        }
        else {
            alert('wrong info');
        }

    };

    render() {
        let form = (
            <div>
                <Form onSubmit={this.submitHandler} style={{ width: '100%', height: '100%' }} className={' d-flex' + ' flex-column' + ' align-items-center'} >


                    <img src={LogoImage} className={classes.LogoImage} />
                    <br />


                    <p style={{

                        width: '198px',
                        height: '57px',
                        fontFamily: 'Domine',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '50px',
                        lineHeight: '57px',
                        /* identical to box height */

                        letterSpacing: '0.04em',
                        color: '#FFFFFF',

                        textShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)'
                    }} >Docque</p>

                    <br />






                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={classes.Label}>Email</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'email') }} value={this.state.email} type="email" placeholder="email" />

                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={classes.Label} >Password</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'password') }} value={this.state.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <br /><br />
                    <Form.Group controlId="formBasicButton">
                        <button className={classes.Button} type="submit">
                            LOG IN
</button>
                    </Form.Group>

                </Form>
            </div>

        );

        if (this.props.error) {

            form = (

                <div>
                    <Form onSubmit={this.submitHandler} style={{ width: '100%', height: '100%' }} className={' d-flex' + ' flex-column' + ' align-items-center'} >


                        <img src={LogoImage} className={classes.LogoImage} />
                        <br />


                        <p style={{

                            width: '198px',
                            height: '57px',
                            fontFamily: 'Domine',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '50px',
                            lineHeight: '57px',
                            /* identical to box height */

                            letterSpacing: '0.04em',
                            color: '#FFFFFF',

                            textShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)'
                        }} >Docque</p>

                        <br />






                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className={classes.Label}>Email</Form.Label>
                            <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'email') }} value={this.state.email} type="email" placeholder="email" />

                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className={classes.Label} >Password</Form.Label>
                            <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'password') }} value={this.state.password} type="password" placeholder="Password" />
                            <p>incorrect password</p>
                        </Form.Group>
                        <br /><br />
                        <Form.Group controlId="formBasicButton">
                            <button className={classes.Button} type="submit">
                                LOG IN
</button>
                        </Form.Group>

                    </Form>
                </div>


            );
        }

        else if (this.props.loggedIn) {
            form = <Redirect to='/home' exact />;
        }


        return (

            form


        );
    }
}

const mapStateToProps = (state) => {
    return ({
        token: state.login.token,
        userId: state.login.userId,
        error: state.login.error,
        loggedIn: state.login.loggedIn
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        onLogin: (email, password) => { dispatch(actions.login(email, password)) }
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);


