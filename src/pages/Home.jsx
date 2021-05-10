import React from 'react';
import {withAuth} from '../helpers/AuthContext';
import { Login } from '../components/login';
import { Registration } from '../components/registration';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

class Home extends React.Component {

    static propTypes = {
        selectPage: PropTypes.func,
        logIn: PropTypes.func,
        isLoggedIn: PropTypes.bool
    }

    state = {
        isOldUser: true
    }

    goToProfile = () => {
        this.props.selectPage('profile');
    };

    handleLogin = (e) => {
        e.preventDefault();

        const {email, password} = e.target
        this.props.logIn(email.value, password.value)
        // props.selectPage('map');
    };

    toggleLoginForm = () => {
        this.setState({ isOldUser: !this.state.isOldUser })
    }

    render() { 
        return ( 
            <>
                {this.props.isLoggedIn ? (
                    <p>
                        You are logged in <Button onClick={this.goToProfile}>go to profile</Button>
                    </p>
                ) : (
                    this.state.isOldUser ?
                        <Login handleLogin={this.handleLogin} toggleLoginForm={this.toggleLoginForm}/>
                        : 
                        <Registration toggleLoginForm={this.toggleLoginForm}/>
                )}   
            </>
         );
    }
}



export const HomeWithAuth = withAuth(Home);
