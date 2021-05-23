import React from 'react';
import {connect} from 'react-redux';
import { Login } from '../components/login';
import { Registration } from '../components/registration';
import { authenticate, register } from '../actions/actions'
import {Link} from 'react-router-dom';
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


    handleLogin = (e) => {
        e.preventDefault();

        const {email, password} = e.target
        this.props.authenticate(email.value, password.value)
    };

    handleRegistration = (e) => {
        e.preventDefault();

        const {email, password, name, surname} = e.target
        this.props.register(email.value, password.value, name.value, surname.value)
        // console.log(e.target)
    };

    toggleLoginForm = () => {
        this.setState({ isOldUser: !this.state.isOldUser })
    }

    render() { 
        return ( 
            <>
                {this.props.isLoggedIn ? (
                    <p>
                        You are logged in 
                        <Link to="/profile">Go to profile</Link>
                    </p>
                ) : (
                    this.state.isOldUser ?
                        <Login handleLogin={this.handleLogin} toggleLoginForm={this.toggleLoginForm}/>
                        : 
                        <Registration handleRegistration={this.handleRegistration} toggleLoginForm={this.toggleLoginForm}/>
                )}   
            </>
         );
    }
}

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn });
const mapDispatchToProps = { authenticate, register }

export const HomeWithAuth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
