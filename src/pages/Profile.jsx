import React from 'react';
import {withAuth} from '../helpers/AuthContext'
import PropTypes from "prop-types";

class Profile extends React.Component {
    static propTypes = {
        logOut: PropTypes.func,
        selectPage: PropTypes.func
    }

    unauthenticate = () => {
        this.props.logOut();
        this.props.selectPage("home");
    }

    render() {
        return (
            <div>
                <h1>It's a profile page</h1>
                <button onClick={this.unauthenticate}>Log out</button>
            </div>
        );
    }
}

export const ProfileWithAuth = withAuth(Profile);