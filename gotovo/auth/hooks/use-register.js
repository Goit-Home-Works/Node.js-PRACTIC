import {useCallback, useContext, useMemo} from "react";
import {AuthContext} from "../context/auth.context";
import BaseHttpService from "../base-http.service";
import {CLEAR_CONFIRM_TOKEN, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from "../aut.constants";

const registerRequested = () => ({
    type: REGISTER_REQUEST,
})

const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload
})

const registerFailure = (payload) => ({
    type: REGISTER_FAILURE,
    payload
})

const closeModal = () => ({
    type: CLEAR_CONFIRM_TOKEN,
})

const useRegister = () => {
    const {loading, confirmToken, dispatch} = useContext(AuthContext);
    const httpService = useMemo(() => new BaseHttpService(), [])
    const onCloseModal = () => dispatch(closeModal());
    const register = useCallback(async (data) => {
        dispatch(registerRequested())
        try {
            const {data: response} = await httpService.register(data);
            dispatch(registerSuccess(response))
        } catch (error) {
            dispatch(registerFailure(error))
        }
    }, [dispatch]);

    return {
        register,
        loading,
        confirmToken,
        closeModal: onCloseModal,
    }
}

export default useRegister;