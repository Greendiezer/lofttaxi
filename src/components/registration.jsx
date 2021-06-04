import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";

export const Registration = ({ ...props }) => {

    Registration.propTypes = {
        toggleLoginForm: PropTypes.func,
        handleLogin: PropTypes.func
    }

    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        
        props.handleRegistration(data)
    }

    return (
        <Paper className="form__block">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container 
                    spacing={3} 
                >
                    <Grid item xs={12} className="form__row form__rowToRight">
                        <h1>Войти</h1>
                        <p>Уже зарегистрированы? <span className="link" onClick={props.toggleLoginForm}>Войти</span></p>
                    </Grid>
                    <Grid item xs={12} className="form__row">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Введите email' }}
                            render={({ field: { onChange, value } }) => (
                                <TextField 
                                    required 
                                    id="email" 
                                    label="Email" 
                                    defaultValue="mail@mail.ru" 
                                    className="form__input"
                                    fullWidth
                                    error={errors.email ? true : false}
                                    type="email"
                                    helperText={errors.email && errors.email.message}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} className="form__row">
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Введите имя' }}
                            render={({ field: { onChange, value } }) => (
                                <TextField 
                                    required 
                                    id="name" 
                                    label="Имя" 
                                    defaultValue="Петр" 
                                    className=""
                                    error={errors.name ? true : false}
                                    type="name"
                                    helperText={errors.name && errors.name.message}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} className="form__row">
                        <Controller
                            name="surname"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Введите фамилию' }}
                            render={({ field: { onChange, value } }) => (
                                <TextField 
                                    required 
                                    id="surname" 
                                    label="Фамилия" 
                                    defaultValue="Александрович"
                                    className=""
                                    error={errors.surname ? true : false}
                                    type="surname"
                                    helperText={errors.surname && errors.surname.message}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} className="form__row">
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Введите пароль' }}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="form__input"
                                    fullWidth
                                    error={errors.password ? true : false}
                                    type="password"
                                    helperText={errors.password && errors.password.message}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} className="form__row form__rowToLeft">
                        <Button type="submit" color="primary" variant="contained">Зарегистрироваться</Button>
                    </Grid>
                </ Grid>
            </form>
        </Paper>
    )
};



