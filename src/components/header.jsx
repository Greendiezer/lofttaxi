import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

class Header extends React.Component {

    static propTypes = {
        selectPage: PropTypes.func
    }

    render() { 
        return ( 
            <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                                        Loft Taxi
                    </Typography>
                        <Link to="/">
                            Логин
                        </Link>
                        <Link to="/map">
                            Карта
                        </Link>
                        <Link to="/profile">
                            Профиль
                        </Link>
                </Toolbar>

            </AppBar>
            </>
        );
    }
}
 
export default Header;