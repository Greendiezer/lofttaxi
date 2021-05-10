import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

export const Login = ({...props}) => {

    Login.propTypes = {
        toggleLoginForm: PropTypes.func,
        handleLogin: PropTypes.func
    }

    return (
        <form onSubmit={props.handleLogin}>
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
    ) 
}
