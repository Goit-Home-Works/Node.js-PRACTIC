import {LOGOUT} from "../aut.constants";
import {useCallback, useContext} from "react";
import {AuthContext} from "../context/auth.context";
import Cookies from 'js-cookie';

const userLogout = () => ({
    type: LOGOUT
})

const useLogout = () => {
    const {dispatch} = useContext(AuthContext);
    return useCallback(() => {
        dispatch(userLogout())
        Cookies.remove('accessToken');
    }, [dispatch])
}

export default useLogout;