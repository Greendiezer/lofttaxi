import {getAddressListWatcher, getAddressListSaga} from '../sagas/addressListSaga'
import {takeEvery} from '@redux-saga/core/effects'
import {runSaga} from '@redux-saga/core'
import { GET_ADDRESS_LIST, getAddressListSuccess, getAddressListFailure}  from '../actions/actions'
import * as addressApi from '../api/api'

describe("getAddressListWatcher", () => {
    const genObject = getAddressListWatcher()

    it("should wait for every GET_ADDRESS_LIST action and call getAddressListSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(GET_ADDRESS_LIST, getAddressListSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("getAddressListSaga", () => {

    it("should call api and dispatch getAddressListSuccess action", async () => {
        const dummySuccessResponse = {addresses: ["address1", "address2"]}

        const requestAddressList = jest
            .spyOn(addressApi, "getAddressListFromServer")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getAddressListSaga,
            {}
        )
        
        expect(requestAddressList).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([getAddressListSuccess({addresses: ["address1", "address2"]})])
        requestAddressList.mockClear()
    })
})