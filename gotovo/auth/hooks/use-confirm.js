import {useCallback, useContext, useMemo} from "react";

import {CONFIRM_FAILURE, CONFIRM_REQUEST, CONFIRM_SUCCESS} from "../aut.constants";
import {AuthContext} from "../context/auth.context";
import BaseHttpService from "../base-http.service";
import {useRouter} from "next/router";

const confirmRequested = () => ({
    type: CONFIRM_REQUEST,
})

const confirmSuccess = (payload) => ({
    type: CONFIRM_SUCCESS,
    payload
})

const confirmFailure = (payload) => ({
    type: CONFIRM_FAILURE,
    payload
})

const useConfirm = () => {
    const {dispatch} = useContext(AuthContext);
    const router = useRouter();
    const httpService = useMemo(() => new BaseHttpService(), [])
    return useCallback(async (credentials) => {
        dispatch(confirmRequested())
        try {
            await httpService.confirm(credentials);
            dispatch(confirmSuccess())
            await router.push('/login')
        } catch (error) {
            dispatch(confirmFailure(error))
        }
    }, [dispatch])
}

export default useConfirm;