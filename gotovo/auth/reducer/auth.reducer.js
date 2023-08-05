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