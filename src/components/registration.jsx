import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

export const Registration = ({ ...props }) => {

    Registration.propTypes = {
        toggleLoginForm: PropTypes.func,
        handleLogin: PropTypes.func
    }

    return (
        <form onSubmit={props.handleRegistration}>
            <TextField required id="email" label="Email" defaultValue="mail@mail.ru" />
            <TextField required id="name" label="Имя" defaultValue="Петр" />
            <TextField required id="surname" label="Фамилия" defaultValue="Александрович" />
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



