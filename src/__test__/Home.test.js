import React from "react"
import { render, fireEvent } from "@testing-library/react"
import {HomeWithAuth} from "../pages/Home"
import { authenticate, register } from '../actions/actions'
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import {mount, shallow} from "enzyme"

// jest.mock("../actions/actions", () => ({ 
//     logOut: () => ({}),
//     getCard: () => ({}),
//     changeCard: () => ({}),    
// }));

jest.mock("../components/login", () => ({ Login: () => <div>Login content</div>}));
jest.mock("../components/registration", () => ({ Registration: () => <div>registration content</div>}));
jest.mock("../components/header", () => ( () => <div>Navigation header</div>));
jest.mock("../actions/actions", () => ({ 
    authenticate: () => ({}),
    register: () => ({})
}));



describe("Home", ()=>{
    it("renders correctly for authorized user", () => {
        const mockStore = {
            getState: () => ({
                auth: {isLoggedIn: true}
            }),
            subscribe: () => {},
            dispatch: () => {}
        }



        const history = createMemoryHistory()

        const { container } = render(
            <Router history={ history }>
                <Provider store={ mockStore }>
                    <HomeWithAuth />
                </Provider>
            </Router>
        );

        expect(container.innerHTML).toMatch("profile")
    })
    
})