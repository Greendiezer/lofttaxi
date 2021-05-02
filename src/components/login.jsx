import React from 'react';

export const Login = (props) => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.selectPage('map');
    };

        return (
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email"/>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password"/>
                <input type="submit" value="Войти" />
            </form>
        )
}

