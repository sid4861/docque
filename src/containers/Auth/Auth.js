import React, { Component } from 'react';
import classes from './Auth.module.css';
import Form from 'react-bootstrap/Form';
import LogoImage from '../../assets/images/doctor-emoji-png-11-transparent.png';
import * as actions from '../../store/actions/index.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    state = {
        firstName: null,
        lastName: null,
        country: null,
        highestQualification: null,
        email: null,
        password: null
    };

    componentDidMount() {
        document.body.style.background = 'linear-gradient(90deg, #F7CE68 0%, #FBAB7E 100%), #C4C4C4';
        document.body.style.width = '100%';
        document.body.style.margin = '0';
        document.body.style.height = '100%';
    }

    componentWillUnmount(){
        document.body.style.background = 'white';
    }

    inputChangedHandler = (event, inputType) => {
        switch (inputType) {
            case 'firstName':
                this.setState({
                    ...this.state,
                    firstName: event.target.value
                });
                break;
            case 'lastName':
                this.setState({
                    ...this.state,
                    lastName: event.target.value
                });
                break;
            case 'country':
                this.setState({
                    ...this.state,
                    country: event.target.value
                });
                break;

            case 'highestQualification':
                this.setState({
                    ...this.state,
                    highestQualification: event.target.value
                });
                break;
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
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country,
            highestQualification: this.state.highestQualification,
            email: this.state.email
        }
        console.log(user);
        let valueNull = false;
        for(var key in user){
            if(user[key] === null || user[key] === ''){
                valueNull = true;
            }
        }

        if (this.state.email !== null && this.state.password !== null && this.state.password.length >= 6){
            if(!valueNull){
                this.props.onAuth(this.state.email, this.state.password, user);
            }
            else{
                alert('wrong-info');
            }
            
        }
        else{
            alert('wrong-info');
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

    
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label className={classes.Label} >First Name</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'firstName') }} type="text" value={this.state.firstName} placeholder=" first name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label className={classes.Label} >Last Name</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'lastName') }} type="text" value={this.state.lastName} placeholder=" last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCountry">
                        <Form.Label className={classes.Label} >Country</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'country') }} type="text" value={this.state.country} placeholder="country" />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicHighestQualiifcation">
                        <Form.Label className={classes.Label} >Highest Qualification</Form.Label>

                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check className={classes.InputRadio} inline label="MBBS"  value="MBBS" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-1`} />
                                <Form.Check className={classes.InputRadio} inline label="MD"  value="MD" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-2`} />
                                <Form.Check className={classes.InputRadio} inline label="MS"  value="MS" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-3`} />
                                <Form.Check className={classes.InputRadio} inline label="DNB"   value="DNB" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-4`} />

                            </div>
                        ))}

                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={classes.Label}>Email</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'email') }} value={this.state.email} type="email" placeholder="email" />
                        <Form.Text style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '10px',
                            lineHeight: '27px',
                            /* identical to box height */

                            letterSpacing: '0.04em',
                            color: '#FFFFFF',

                            textShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)'
                        }} >
                            We'll never share your email with anyone else.
</Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={classes.Label} >Password</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'password') }} value={this.state.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicButton">
                        <button className={classes.Button} type="submit">
                            SIGN UP
</button>
                    </Form.Group>

                </Form>
            </div>

        );

        if (this.props.error) {

            form =(
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

                    <p>Error submitting, please check info</p>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label className={classes.Label} >First Name</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'firstName') }} type="text" value={this.state.firstName} placeholder=" first name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label className={classes.Label} >Last Name</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'lastName') }} type="text" value={this.state.lastName} placeholder=" last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCountry">
                        <Form.Label className={classes.Label} >Country</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'country') }} type="text" value={this.state.country} placeholder="country" />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicHighestQualiifcation">
                        <Form.Label className={classes.Label} >Highest Qualification</Form.Label>

                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check className={classes.InputRadio} inline label="MBBS"  value="MBBS" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-1`} />
                                <Form.Check className={classes.InputRadio} inline label="MD"  value="MD" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-2`} />
                                <Form.Check className={classes.InputRadio} inline label="MS"  value="MS" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-3`} />
                                <Form.Check className={classes.InputRadio} inline label="DNB"   value="DNB" onChange={(event) => { this.inputChangedHandler(event, 'highestQualification') }} type={type} id={`inline-${type}-4`} />

                            </div>
                        ))}

                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={classes.Label}>Email</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'email') }} value={this.state.email} type="email" placeholder="email" />
                        <Form.Text style={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '10px',
                            lineHeight: '27px',
                            /* identical to box height */

                            letterSpacing: '0.04em',
                            color: '#FFFFFF',

                            textShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)'
                        }} >
                            We'll never share your email with anyone else.
</Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={classes.Label} >Password</Form.Label>
                        <Form.Control className={classes.Input} onChange={(event) => { this.inputChangedHandler(event, 'password') }} value={this.state.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicButton">
                        <button className={classes.Button} type="submit">
                            SIGN UP
</button>
                    </Form.Group>

                </Form>
            </div>
            );
        }

        else if (this.props.signedUp) {
            form = <Redirect to='/login' />
        }


        return (

            form


        );
    }
}

const mapStateToProps = (state) => {
    return ({
        error: state.auth.error,
        signedUp: state.auth.signedUp
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        onAuth: (email, password, user) => { dispatch(actions.auth(email, password, user)) }
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);


