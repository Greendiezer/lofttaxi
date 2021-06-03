import React from "react"
import {render, fireEvent} from "@testing-library/react"
import App from "../App"
import {Provider} from "react-redux"
import {Router} from "react-router-dom"
import {createMemoryHistory} from "history"
// import Header from '../components/header';

jest.mock("../pages/Home", () => ({ HomeWithAuth: () => <div>Home content</div>}));
jest.mock("../pages/Map", () => ({ Map: () => <div>Map content</div>}));
jest.mock("../pages/Profile", () => ({ ProfileWithAuth: () => <div>Profile content</div>}));
jest.mock("../components/header", () => ( () => <div>Navigation header</div>));

describe("App", ()=>{
    it("renders correctly for authorized user", () => {
        const mockStore = {
            getState: () => ({auth: {isLoggedIn: true}}),
            subscribe: () => {},
            dispatch: () => {}
        }

        const history = createMemoryHistory()

        const {container} = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </Router>
        );
        expect(container.innerHTML).toMatch("Home content")
        expect(container.innerHTML).toMatch("Navigation header")
    })
    
})