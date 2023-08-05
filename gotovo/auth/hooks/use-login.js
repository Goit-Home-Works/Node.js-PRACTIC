import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "../aut.constants";
import {useCallback, useContext, useMemo} from "react";
import {AuthContext} from "../context/auth.context";
import BaseHttpService from "../base-http.service";
import Cookies from "js-cookie";

const loginRequested = () => ({
    type: LOGIN_REQUEST,
})

const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})
const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
})

const useLogin = () => {
    const {dispatch, loading} = useContext(AuthContext);
    const httpService = useMemo(() => new BaseHttpService(), [])
    const login = useCallback(async (credentials) => {
        dispatch(loginRequested())
        try {
            const {data} = await httpService.login(credentials);
            dispatch(loginSuccess(data))
            Cookies.set('accessToken', data.accessToken, {expires: 7})
        } catch (error) {
            dispatch(loginFailure(error))
        }
    }, [dispatch]);

    return {
        login,
        loading,
    }
}

export default useLogin;