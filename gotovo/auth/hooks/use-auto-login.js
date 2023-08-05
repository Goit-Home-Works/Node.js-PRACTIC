import {useContext, useEffect} from 'react';

import {AuthContext} from '../context/auth.context';
import {AUTH_AUTO_LOGIN} from '../aut.constants';

export default function useAutoLogin(user) {
    const {dispatch} = useContext(AuthContext);

    useEffect(() => {
        if (!user.accessToken) {
            return;
        }
        // Cookies.set('accessToken', user.accessToken, {expires: 7})
        // Cookies.set('refreshToken', user.refreshToken, {expires: 7})
        dispatch({type: AUTH_AUTO_LOGIN, payload: user})
    }, [])
}