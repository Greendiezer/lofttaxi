import route from '../reducers/route'

describe("route reducer", () => {
    it("takes GET_ROUTE action and changes state", () => {
        const initialState = {
            isLoading: false,
            data: [],
            error: ''
        }

        const action = {
            type: "GET_ROUTE",
        }

        expect(route(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: true,
                error: ''
            }
        )
    })

    it("takes GET_ROUTE_SUCCESS action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: [],
            error: 'error'
        }

        const action = {
            type: "GET_ROUTE_SUCCESS",
            payload: [[1.1,2.2],[3.3,4.4]]
        }

        expect(route(initialState, action)).toEqual(
            {
                isLoading: false,
                data: [[1.1,2.2],[3.3,4.4]],
                error: ''
            }
        )
    })

    it("takes GET_ROUTE_FAILURE action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: [],
            error: ''
        }

        const action = {
            type: "GET_ROUTE_FAILURE",
            payload: "error"
        }

        expect(route(initialState, action)).toEqual(
            {
                isLoading: false,
                error: "error",
                data: []
            }
        )
    })
    
})