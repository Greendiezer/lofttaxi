import {getRouteWatcher, getRouteSaga} from '../sagas/routeSaga'
import {takeEvery} from '@redux-saga/core/effects'
import {runSaga} from '@redux-saga/core'
import { GET_ROUTE, getRouteSuccess, getRouteFailure}  from '../actions/actions'
import * as routeApi from '../api/api'

describe("getRouteWatcher", () => {
    const genObject = getRouteWatcher()

    it("should wait for every GET_ROUTE action and call getRouteSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(GET_ROUTE, getRouteSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("getRouteSaga", () => {

    it("should call api and dispatch getRouteSuccess action", async () => {
        const dummySuccessResponse = [[1.1,2.2],[3.3,4.4]]

        const requestRoute = jest
            .spyOn(routeApi, "getRouteFromServer")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getRouteSaga,
            {payload : { address1 : "address1", address2 : "address2" }}
        )
        
        expect(requestRoute).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([getRouteSuccess([[1.1,2.2],[3.3,4.4]])])
        requestRoute.mockClear()
    })
})