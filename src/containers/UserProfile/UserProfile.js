import React, { Component } from 'react';
import Axios from '../../hoc/axios/instance.js';
import UserProfileMainComponent from './UserProfileMainComponent/UserProfileMainComponent.js';
import NavbarComponent from '../../components/UI/Navbar/Navbar.js';

class UserProfile extends Component {

    render() {

        return (
            <div>
                <NavbarComponent />
                <UserProfileMainComponent userId={this.props.match.params.id} />
            </div>

        );

    }
}

export default UserProfile;