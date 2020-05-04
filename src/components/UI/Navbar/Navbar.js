import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import classes from './Navbar.module.css';
import LogoImage from '../../../assets/images/doctor-emoji-png-11-transparent.png';
import Notifications from '../../../containers/Notifications/Notifications.js';

const NavbarComponent = (props) => {
    return (

        <Navbar className={classes.Background} expand="lg">
            <Navbar.Brand href="/home"  > <img className={classes.LogoImage} src={LogoImage} />  <span className={classes.LogoText} >Docque</span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
{/* 
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}


                <Nav className="ml-auto">
                    <Button href="/add/question" variant="outline-success"  style={{margin:'10px'}} >Add Question</Button>
                    <Button href="/logout" variant="outline-success" style={{margin:'10px'}}  >Logout</Button>
                    <Notifications />
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
}

export default NavbarComponent;