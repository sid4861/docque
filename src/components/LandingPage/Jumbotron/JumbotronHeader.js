import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import classes from './JumbotronHeader.module.css';
import  doctorImage from '../../../assets/images/doctor-emoji-png-11-transparent.png';
import {Link} from 'react-router-dom';
const JumbotronHeader = (props) => {
    return (
        <Jumbotron fluid  className={classes.JumbotronHeader}>
            <img src={doctorImage}  className={classes.DoctorLogo} alt="logo"/>
            <p className={classes.Logo}>Docque</p>
            <Link className={classes.ButtonLogin} to='/login' >LOGIN</Link>
            <Link className={classes.ButtonSignup} to='/signup' >SIGN UP</Link>
        </Jumbotron>
    );
};

export default JumbotronHeader;