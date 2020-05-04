import React, { Component } from 'react';
import axios from '../../hoc/axios/instance.js';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import { withRouter, Link } from 'react-router-dom';

class Notifications extends Component {

    token = localStorage.getItem('token');
    userId = localStorage.getItem('userId');

    state = {
        notifications: []
    };

    componentDidMount() {

        let notificationsObject = null;
        let notificationsArray = [];
        const queryParams = '?auth=' + this.token + '&orderBy="userID"&equalTo="' + this.userId + '"';
        axios.get('/users.json' + queryParams).then(
            response => {

                if('notifications' in response.data[Object.keys(response.data)[0]] ){

                    if (response.data[Object.keys(response.data)[0]].notifications !== null && response.data[Object.keys(response.data)[0]].notifications !== undefined) {
                        notificationsObject = response.data[Object.keys(response.data)[0]].notifications;
                        Object.keys(notificationsObject).map(key => {
                            notificationsArray.push({ ...notificationsObject[key], key: key });
                        });
                    }
                    
                }

                this.setState({
                    ...this.state,
                    notifications: [...notificationsArray]
                });
            }

        );
    }

    onNotificationClickedHandler = (event, notificationId, questionId) => {
        console.log('in notification clicked handler');
        this.props.history.push('/question/' + questionId);
        this.deleteNotification(notificationId);
    }

    deleteNotification = (notificationId) => {
        this.props.onNotificationDelete(notificationId, this.token);
    }

    render() {

        let n = (
            <NavDropdown title="Notifications" id="basic-nav-dropdown">
                <NavDropdown.Item> No notifications </NavDropdown.Item>
            </NavDropdown>);
        if (this.state.notifications.length > 0) {
            let nArray = this.state.notifications.map(notification => {
                if (notification.type === 'answered') {
                    return (
                        <NavDropdown.Item key={notification.key} onClick={(event) => { this.onNotificationClickedHandler(event, notification.key, notification.questionId) }}>new answer</NavDropdown.Item>
                    );
                }

                else {
                    return (
                        <NavDropdown.Item key={notification.key} onClick={(event) => { this.onNotificationClickedHandler(event, notification.key, notification.questionIdOfComment) }}>new comment</NavDropdown.Item>
                    );
                }

            });
            n = (
                <NavDropdown title="Notifications" id="basic-nav-dropdown">
                    {nArray}
                </NavDropdown>
            );
        }
        return (
            n
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        notificationDeleted: state.notificationDelete.notificationDeleted
    });
}

const mapDispatchToProps = (dispatch) => {

    return ({
        onNotificationDelete: (notificationId, token) => { dispatch(actions.notificationDelete(notificationId, token)) }
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notifications));