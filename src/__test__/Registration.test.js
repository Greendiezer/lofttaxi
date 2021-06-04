import React from "react"
import {render, fireEvent, getByText} from "@testing-library/react"
import { Registration } from '../components/registration';
import {Provider} from "react-redux"
import {Router} from "react-router-dom"
import {createMemoryHistory} from "history"

describe("Registration component", ()=>{
    it("renders correctly", () => {

        const {container, getByText} = render(
                    <Registration  />
        );

        expect(container.innerHTML).toMatch("Имя")
    })

    it("Calls registration function", () => {
        const props = {
            handleRegistration : jest.fn()
        }

        const {getByText} = render(
                    <Registration  {...props}/>
        );

        fireEvent.click(getByText('Зарегистрироваться'))
        expect(props.handleRegistration).toBeCalled()
    })

    it("Calls login form", () => {
        const props = {
            toggleLoginForm : jest.fn()
        }

        const {getByText} = render(
                    <Registration  {...props}/>
        );

        fireEvent.click(getByText('Войти'))
        expect(props.toggleLoginForm).toBeCalled()
    })
    
})