import address from '../reducers/address'

describe("address reducer", () => {
    it("takes GET_ADDRESS_LIST action and changes state", () => {
        const initialState = {
            isLoading: false,
            data: {addresses:[]},
            error: ''
        }

        const action = {
            type: "GET_ADDRESS_LIST",
        }

        expect(address(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: true,
                error: ''
            }
        )
    })

    it("takes GET_ADDRESS_LIST_SUCCESS action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: {addresses:[]},
            error: 'error'
        }

        const action = {
            type: "GET_ADDRESS_LIST_SUCCESS",
            payload: {addresses:["address1", "address2"]}
        }

        expect(address(initialState, action)).toEqual(
            {
                isLoading: false,
                data: {addresses:["address1", "address2"]},
                error: ''
            }
        )
    })

    it("takes GET_ADDRESS_LIST_FAILURE action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: {addresses:[]},
            error: ''
        }

        const action = {
            type: "GET_ADDRESS_LIST_FAILURE",
            payload: "error"
        }

        expect(address(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: false,
                error: 'error'
            }
        )
    })
    
})