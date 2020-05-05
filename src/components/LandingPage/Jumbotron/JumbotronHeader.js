import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import classes from './JumbotronHeader.module.css';
import doctorImage from '../../../assets/images/doctor-emoji-png-11-transparent.png';
import { Link } from 'react-router-dom';
const JumbotronHeader = (props) => {
    return (
        // <Jumbotron fluid  className={classes.JumbotronHeader}>
        //     <img src={doctorImage}  className={classes.DoctorLogo} alt="logo"/>
        //     <p className={classes.Logo}>Docque</p>
        //     <Link className={classes.ButtonLogin} to='/login' >LOGIN</Link>
        //     <Link className={classes.ButtonSignup} to='/signup' >SIGN UP</Link>
        // </Jumbotron>

        <Jumbotron fluid className={classes.JumbotronHeader} >
           <img src={doctorImage}  className={classes.DoctorLogo} alt="logo"/>
           <p className={classes.Logo}>Docque</p>
           <p> Docque is an open community for medical professionals to ask questions and share knowledge. </p>
           <Container fluid>
           <Row className="justify-content-center  flex-column flex-md-row">
             <Col sm={12} md={2}  style={{marginTop: '1%', padding: '2px'}} > <Link className={classes.ButtonLogin} to='/login' >LOGIN</Link> </Col> 
        <Col  sm={12} md={2} style={{marginTop: '1%', padding: '2px'}}  > <Link className={classes.ButtonSignup} to='/signup' >SIGN UP</Link> </Col>
            </Row>
           </Container>
           
        </Jumbotron>

    );
};

export default JumbotronHeader;