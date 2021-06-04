import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";

export const Login = ({...props}) => {

    Login.propTypes = {
        toggleLoginForm: PropTypes.func,
        handleLogin: PropTypes.func
    }

    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        
        props.handleLogin(data)
    }

    // console.log(errors)

    return (
        <Paper className="form__block">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <Grid 
                    container 
                    spacing={3} 
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} className="form__row form__rowToRight">
                        <h1>Войти</h1>
                        <p>Новый пользователь? <span className="link" onClick={props.toggleLoginForm}>Зарегистрируйтесь</span></p>
                    </Grid>
                    <Grid item xs={12} className="form__row">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Введите email' }}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    className="form__input"
                                    fullWidth
                                    label="email"
                                    id="email"
                                    error={errors.email ? true : false}
                                    type="email"
                                    helperText={errors.email && errors.email.message}
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
                                    className="form__input"
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type="password"
                                    error={errors.password ? true : false}
                                    helperText={errors.password && errors.password.message}
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        
                    </Grid>
                    <Grid item xs={12} className="form__row form__rowToLeft">
                        <Button type="submit" color="primary" variant="contained">Войти</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    ) 
}
