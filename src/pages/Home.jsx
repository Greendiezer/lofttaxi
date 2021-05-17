import React from 'react';
import {connect} from 'react-redux';
import { Login } from '../components/login';
import { Registration } from '../components/registration';
import {authenticate} from '../actions/actions'
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
                        <Registration toggleLoginForm={this.toggleLoginForm}/>
                )}   
            </>
         );
    }
}

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn });
const mapDispatchToProps = { authenticate }

export const HomeWithAuth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
