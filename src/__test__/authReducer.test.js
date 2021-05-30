import auth from '../reducers/auth'

describe("auth reducer", () => {
    it("takes LOG_IN action and changes state", () => {
        const initialState = {
            isLoggedIn: false,
            token: "",
            error: ""
        }

        const action = {
            type: "LOG_IN",
            payload: "token"
        }

        expect(auth(initialState, action)).toEqual(
            {
                isLoggedIn: true,
                token: "token",
                error: ""
            }
        )
    })

    it("takes LOG_IN_ERROR action and changes state", () => {
        const initialState = {
            isLoggedIn: true,
            token: "",
            error: ""
        }

        const action = {
            type: "LOG_IN_ERROR",
            payload: "error"
        }

        expect(auth(initialState, action)).toEqual(
            {
                isLoggedIn: false,
                token: "",
                error: "error"
            }
        )
    })

    it("takes LOG_OUT action and changes state", () => {
        const initialState = {
            isLoggedIn: true,
            token: "token",
            error: ""
        }

        const action = {
            type: "LOG_OUT"
        }

        expect(auth(initialState, action)).toEqual(
            {
                isLoggedIn: false,
                token: "",
                error: ""
            }
        )
    })
    
})