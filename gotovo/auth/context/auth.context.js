import React, {
    createContext,
    useReducer,
    useEffect
} from "react";
import {useRouter} from 'next/router';
import Cookies from "js-cookie";
import axios from 'axios';
import {
    CLEAR_CONFIRM_TOKEN,
    CONFIRM_FAILURE,
    CONFIRM_REQUEST,
    CONFIRM_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    SET_TOKEN,
    AUTH_AUTO_LOGIN
} from "../aut.constants";

const initialState = {
    accessToken: null,
    confirmToken: null,
    loading: false,
    message: [],
    userInfo: {
        email: null,
        firstName: null,
        lastName: null,
        picture: null,
    },
};

const reducer = (state, {type, payload}) => {
    switch (type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmToken: payload.confirmToken,
                userInfo: {
                    email: payload.email,
                },
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case SET_TOKEN:
            return {
                ...state,
                accessToken: payload,
            };
        case CONFIRM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CONFIRM_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmToken: null,
                userInfo: {
                    email: null,
                },
            };
        case AUTH_AUTO_LOGIN:
            return {
                ...state,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
                userInfo: payload,
            }
        case CONFIRM_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case CLEAR_CONFIRM_TOKEN:
            return {
                ...state,
                confirmToken: null,
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
                loading: false,
                userInfo: payload.userInfo,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case LOGOUT:
            return {
                ...state,
                accessToken: null,
            };
        default:
            return;
    }
};

const AuthContext = createContext(initialState);

const AuthProvider = ({children}) => {
    const {query} = useRouter();
    const [state, dispatch] = useReducer(reducer, initialState, (initState) => {
        if (Cookies.get("accessToken")) {
            return {
                ...initState,
                accessToken: Cookies.get("accessToken")
            }
        }
        return initialState;
    });

    useEffect(() => {
        if ('accessToken' in query) {
            axios.get(`https://cmusy-dev.space/api/v1/auth/accounts/info`,
                {headers: {Authorization: 'Bearer ' + query.accessToken}}).then(({data}) => {
                dispatch({type: AUTH_AUTO_LOGIN, payload: {...data, ...query}})
                Cookies.set('accessToken', query.accessToken, {expires: 7});
                Cookies.set('refreshToken', query.refreshToken, {expires: 7});
            }).catch(err => err);
        }
    }, [query]);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};
