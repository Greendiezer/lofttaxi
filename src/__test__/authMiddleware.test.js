import {authMiddleware} from '../middleware/authMiddleware';
import {authenticate, register} from '../actions/actions';
import {serverLogin, serverRegister} from '../api/api';

jest.mock("../api/api", () => (
    {
        serverLogin: jest.fn(() => ({success:true, token:"123"})),
        serverRegister: jest.fn(() => ({success:true, token:"123"}))
    }
))


describe("authMiddleWare", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            serverLogin.mockImplementation(async () => ({ success: true, token:"123" }));
            const dispatch = jest.fn()
            await authMiddleware({dispatch})()(
                authenticate("testlogin", "testpassword")
            )
            expect(serverLogin).toBeCalledWith("testlogin", "testpassword");
            expect(dispatch).toBeCalledWith({
                type: 'LOG_IN',
                payload:"123"
            });
        })
        it("gets login error", async () => {
            serverLogin.mockImplementation(async () => ({ success: false, error:"error" }));
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate("testlogin", "testpassword")
            )

            expect(serverLogin).toBeCalledWith("testlogin", "testpassword");
            expect(dispatch).toBeCalledWith({
                type: 'LOG_OUT',
                payload:"error"
            });
        })
    })

    describe("#REGISTER", () => {
        it("successfully creates new user", async () => {
            serverRegister.mockImplementation(async () => ({ success: true, token:"123" }));
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                register("testlogin", "testpassword", "testname", "testsurname")
            )

            expect(serverRegister).toBeCalledWith("testlogin", "testpassword", "testname", "testsurname");
            expect(dispatch).toBeCalledWith({
                type: 'LOG_IN',
                payload:"123"
            });
        })
        it("gets user creation error", async () => {
            serverRegister.mockImplementation(async () => ({ success: false, error:"error" }));
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                register("testlogin", "testpassword", "testname", "testsurname")
            )

            expect(serverRegister).toBeCalledWith("testlogin", "testpassword", "testname", "testsurname");
            expect(dispatch).toBeCalledWith({
                type: 'LOG_OUT',
                payload:"error"
            });
        })
    })

})