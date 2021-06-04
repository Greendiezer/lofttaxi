import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logOut } from '../actions/actions'
import {Logo, MCIcon} from 'loft-taxi-mui-theme';
import "../stylesheets/header.css"

class Header extends React.Component {

    static propTypes = {
        selectPage: PropTypes.func
    }

    unauthenticate = () => {
        this.props.logOut();
    }

    render() { 
        return ( 
            <>
            <AppBar color="primary" id="header">
                <Toolbar className="header__block">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <nav className="header__menu">
                        <Link to="/map" className="header__link">
                            <Button >Карта</Button>
                        </Link>
                        <Link to="/profile" className="header__link">
                            <Button >Профиль</Button>
                        </Link>
                        <Button className="header__link" onClick={this.unauthenticate}>
                            Выйти
                        </Button>
                    </nav>
                </Toolbar>

            </AppBar>
            </>
        );
    }
}

const mapStateToProps = (state) => ({isLoggedIn: state.auth.isLoggedIn});
const mapDispatchToProps = {
    logOut
}
export const HeaderWithAuth = connect(mapStateToProps, mapDispatchToProps)(Header);