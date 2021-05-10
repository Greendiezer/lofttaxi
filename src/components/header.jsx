import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
                        <Button color="inherit" onClick={() => this.props.selectPage('map')}>Карта</Button>
                        <Button color="inherit" onClick={() => this.props.selectPage('profile')}>Профиль</Button>
                        <Button color="inherit" onClick={() => this.props.selectPage('home')}>Логин</Button>
                </Toolbar>

            </AppBar>
            </>
        );
    }
}
 
export default Header;