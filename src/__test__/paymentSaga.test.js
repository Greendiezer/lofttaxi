import {getCardWatcher, getCardSaga, saveCardWatcher, saveCardSaga} from '../sagas/paymentSaga'
import {takeEvery} from '@redux-saga/core/effects'
import {runSaga} from '@redux-saga/core'
import { GET_CARD, getCardSuccess, getCardFailure, CHANGE_CARD, changeCardSuccess }  from '../actions/actions'
import * as paymentApi from '../api/api'

describe("getCardWatcher", () => {
    const genObject = getCardWatcher()

    it("should wait for every GET_CARD action and call getCardSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(GET_CARD, getCardSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("getCardSaga", () => {

    it("should call api and dispatch getCardSuccess action", async () => {
        const dummySuccessResponse = {
            cardName: "test test",
            cardNumber: "1111 2222 3333 4444",
            cvc: "123",
            expiryDate: "11/22",
            id: "1"
        }

        const requestCard = jest
            .spyOn(paymentApi, "getCardDataFromServer")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getCardSaga,
            {payload : { token : "token"}}
        )
        
        expect(requestCard).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([getCardSuccess({
            cardName: "test test",
            cardNumber: "1111 2222 3333 4444",
            cvc: "123",
            expiryDate: "11/22",
            id: "1"
        })])
        requestCard.mockClear()
    })
})

describe("saveCardWatcher", () => {
    const genObject = saveCardWatcher()

    it("should wait for every CHANGE_CARD action and call saveCardSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(CHANGE_CARD, saveCardSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("saveCardSaga", () => {

    it("should call api and dispatch changeCardSuccess action", async () => {
        const dummySuccessResponse = {
            success: true
        }

        const requestCardChange = jest
            .spyOn(paymentApi, "postCardDataToServer")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            saveCardSaga,
            {payload : {
                cardName: "test test",
                cardNumber: "1111 2222 3333 4444",
                cvc: "123",
                expiryDate: "11/22",
                id: "1"
                }
            }
        )
        
        expect(requestCardChange).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([changeCardSuccess({
            cardName: "test test",
            cardNumber: "1111 2222 3333 4444",
            cvc: "123",
            expiryDate: "11/22",
            id: "1"
        })])
        requestCardChange.mockClear()
    })
})