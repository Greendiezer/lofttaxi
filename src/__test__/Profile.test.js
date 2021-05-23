import React from "react"
import { render, fireEvent } from "@testing-library/react"
import {ProfileWithAuth} from "../pages/Profile"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

jest.mock("../actions/actions", () => ({ 
    logOut: () => ({}),
    getCard: () => ({}),
    changeCard: () => ({}),    
}));


describe("Profile", ()=>{
    it("renders correctly for authorized user", () => {
        const mockStore = {
            getState: () => ({
                auth: {isLoggedIn: true, token: "123"},
                card: {
                    data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
                    isLoading: false,
                    error: ""
                    }
            }),
            subscribe: () => {},
            dispatch: () => {}
        }



        const history = createMemoryHistory()

        const { container } = render(
            <Router history={ history }>
                <Provider store={ mockStore }>
                    <ProfileWithAuth />
                </Provider>
            </Router>
        );
        expect(container.innerHTML).toMatch("Профиль")
    })
    
})