import React, {Component} from 'react';
import classes from './Greeting.module.css';
import AxiosInstance from '../../../hoc/axios/instance.js';

class Greeting extends Component{

    state = {
        firstName: null
    };

    componentDidMount(){
        let token = localStorage.getItem('token');
        let userId = localStorage.getItem('userId');
        const queryParams = '?auth=' + token + '&orderBy="userID"&equalTo="' + userId + '"';
        AxiosInstance.get('/users.json' +  queryParams ).then(
            response => {
                console.log(response);
                console.log(response.data);
                console.log(response.data[Object.keys(response.data)[0]]);
                this.setState({
                    firstName: response.data[Object.keys(response.data)[0]]['firstName']
                });
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    }

    render(){
        return(
            <p className={classes.Greeting} >
                Hi, Dr. {this.state.firstName}
            </p>
        );
    }
}

export default Greeting;