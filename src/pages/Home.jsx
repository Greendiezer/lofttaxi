import React from 'react';
import {connect} from 'react-redux';
import {Login} from '../components/login';
import {Registration} from '../components/registration';
import {authenticate, register} from '../actions/actions'
import {Link, Route, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../stylesheets/Home.css"

class Home extends React.Component {

    static propTypes = {
        selectPage: PropTypes.func,
        logIn: PropTypes.func,
        isLoggedIn: PropTypes.bool
    }

    state = {
        isOldUser: true
    }

    handleLogin = (data) => {
        // e.preventDefault();
        console.log(data)

        const { email, password } = data
        this
            .props
            .authenticate(email, password)
    };

    handleRegistration = (data) => {

        const {email, password, name, surname} = data
        this
            .props
            .register(email, password, name, surname)
    };

    toggleLoginForm = () => {
        this.setState({
            isOldUser: !this.state.isOldUser
        })
    }

    render() {

        return (
            <Grid
                container
                alignItems="center"
                justify="center"
                style={{
                minHeight: "100vh"
            }}>
                {this.props.isLoggedIn
                    ? (
                        <Redirect to="/profile"/>
                    )
                    : (
                        <Grid item xs='auto'>
                            {this.state.isOldUser
                                ? <Login handleLogin={this.handleLogin} toggleLoginForm={this.toggleLoginForm}/>
                                : <Registration
                                    handleRegistration={this.handleRegistration}
                                    toggleLoginForm={this.toggleLoginForm}/>
                            }
                        </Grid>
                    )}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({isLoggedIn: state.auth.isLoggedIn});
const mapDispatchToProps = {
    authenticate,
    register
}

export const HomeWithAuth = connect(mapStateToProps, mapDispatchToProps)(Home);
