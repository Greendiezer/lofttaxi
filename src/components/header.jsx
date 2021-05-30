import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import {Logo, MCIcon} from 'loft-taxi-mui-theme';
import "../stylesheets/header.css"

class Header extends React.Component {

    static propTypes = {
        selectPage: PropTypes.func
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
                        <Link to="/" className="header__link">
                            <Button aria-disabled="false">Логин</Button>
                        </Link>
                        <Link to="/map" className="header__link">
                            <Button >Карта</Button>
                        </Link>
                        <Link to="/profile" className="header__link">
                            <Button >Профиль</Button>
                        </Link>
                    </nav>
                </Toolbar>

            </AppBar>
            </>
        );
    }
}
 
export default Header;