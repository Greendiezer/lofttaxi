import React from "react"
import {render, fireEvent, getByText} from "@testing-library/react"
import { Login } from '../components/login';
import {Provider} from "react-redux"
import {Router} from "react-router-dom"
import {createMemoryHistory} from "history"

describe("Login component", ()=>{
    it("renders correctly", () => {

        const {container, getByText} = render(
                    <Login  />
        );

        expect(container.innerHTML).toMatch("email")
    })

    it("Calls login function", () => {
        const props = {
            handleLogin : jest.fn()
        }

        const {getByText} = render(
                    <Login  {...props}/>
        );

        fireEvent.click(getByText('Войти'))
        expect(props.handleLogin).toBeCalled()
    })

    it("Calls registration form", () => {
        const props = {
            toggleLoginForm : jest.fn()
        }

        const {getByText} = render(
                    <Login  {...props}/>
        );

        fireEvent.click(getByText('Регистрация'))
        expect(props.toggleLoginForm).toBeCalled()
    })
    
})