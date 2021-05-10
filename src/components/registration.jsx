import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

Registration.propTypes = {
    toggleLoginForm: PropTypes.func,
    handleLogin: PropTypes.func
}

export const Registration = ({ ...props }) => {

    return (
        <form onSubmit={props.handleLogin}>
            <TextField required id="email" label="Email" defaultValue="mail@mail.ru" />
            <TextField required id="firstname" label="Как вас зовут?" defaultValue="Петр Александрович" />
            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <span>Уже зарегистрированы? <span onClick={props.toggleLoginForm}>Войти</span></span>
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    )
};

