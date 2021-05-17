import {authMiddleware} from '../middleware/authMiddleware';
import {authenticate} from '../actions/actions';
import {serverLogin} from '../api/api';

jest.mock("../api/api", () => ({serverLogin: jest.fn(() => true )}))

describe("authMiddleWare", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate("testlogin", "testpassword")
            )

            expect(serverLogin).toBeCalledWith("testlogin", "testpassword");
        })
    })
})