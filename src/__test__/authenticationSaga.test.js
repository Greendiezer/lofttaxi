import {authWatcher, authenticationSaga, registerWatcher, registerSaga} from '../sagas/authenticationSaga'
import {takeEvery} from '@redux-saga/core/effects'
import {runSaga} from '@redux-saga/core'
import { logIn, logInError, AUTHENTICATE, REGISTER}  from '../actions/actions'
import * as authApi from '../api/api'

describe("authWatcher", () => {
    const genObject = authWatcher()

    it("should wait for every AUTHENTICATE action and call authenticationSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(AUTHENTICATE, authenticationSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("authenticationSaga", () => {

    it("should call api and dispatch logIn action", async () => {
        const dummySuccessResponse = {success: true, token: "token"}

        const requestAuth = jest
            .spyOn(authApi, "serverLogin")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            authenticationSaga, 
            { payload : { email : "email", password : "password" } }
        )
        
        expect(requestAuth).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([logIn("token")])
        requestAuth.mockClear()
    })

    it("should call api and dispatch logInError action", async () => {

        const dummySuccessResponse = {success: false, error: "error"}

        const requestAuth = jest
            .spyOn(authApi, "serverLogin")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            authenticationSaga, 
            { payload : { email : "wrongemail", password : "wrongpassword" } }
        )
        
        expect(requestAuth).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([logInError("error")])
        requestAuth.mockClear()

    })

    it("should call api and dispatch Register action", async () => {
        const dummySuccessResponse = {success: true, token: "token"}

        const requestAuth = jest
            .spyOn(authApi, "serverRegister")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            registerSaga, 
            { payload : { email : "email", password : "password", name: "name", surname: "surname" } }
        )
        
        expect(requestAuth).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([logIn("token")])
        requestAuth.mockClear()
    })
})

describe("registerWatcher", () => {
    const genObject = registerWatcher()

    it("should wait for every REGISTER action and call registerSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(REGISTER, registerSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})