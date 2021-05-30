import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";

export const Login = ({...props}) => {

    Login.propTypes = {
        toggleLoginForm: PropTypes.func,
        handleLogin: PropTypes.func
    }

    return (
        <Paper>
            <form onSubmit={props.handleLogin} className="form__block form__block_login">
                <TextField id="email" label="Standard" name="email" type="email"/>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <span>Новый пользователь? <span onClick={props.toggleLoginForm}>Регистрация</span></span>
                <Button type="submit">Войти</Button>
            </form>
        </Paper>
    ) 
}
