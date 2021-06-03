import card from '../reducers/card'

describe("card reducer", () => {
    it("takes GET_CARD action and changes state", () => {
        const initialState = {
            isLoading: false,
            data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
            error: ''
        }

        const action = {
            type: "GET_CARD",
            payload: "token"
        }

        expect(card(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: true,
            }
        )
    })

    it("takes GET_CARD_SUCCESS action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
            error: 'error'
        }

        const action = {
            type: "GET_CARD_SUCCESS",
            payload: {id: '1', cardNumber: '12345', expiryDate: '11/22', cardName: 'testname', cvc: '123'}
        }

        expect(card(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: false,
                data: {id: '1', cardNumber: '12345', expiryDate: '11/22', cardName: 'testname', cvc: '123'},
                error: ''
            }
        )
    })

    it("takes GET_CARD_FAILURE action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
            error: 'error'
        }

        const action = {
            type: "GET_CARD_FAILURE",
            payload: "error"
        }

        expect(card(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: false,
                error: "error"
            }
        )
    })

    it("takes CHANGE_CARD action and changes state", () => {
        const initialState = {
            isLoading: false,
        }

        const action = {
            type: "CHANGE_CARD"
        }

        expect(card(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: true
            }
        )
    })

    it("takes CHANGE_CARD_SUCCESS action and changes state", () => {
        const initialState = {
            isLoading: true,
            data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
            error: 'error'
        }

        const action = {
            type: "CHANGE_CARD_SUCCESS",
            payload: {id: '1', cardNumber: '12345', expiryDate: '11/22', cardName: 'testname', cvc: '123'}
        }

        expect(card(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: false,
                data: {id: '1', cardNumber: '12345', expiryDate: '11/22', cardName: 'testname', cvc: '123'},
                error: ''
            }
        )
    })

        
    
})