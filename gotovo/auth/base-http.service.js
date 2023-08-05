import axios from 'axios'

axios.defaults.baseURL = 'https://cmusy-dev.space/api/v1';

export default class BaseHttpService {
    accessToken = null;
    refreshToken = null;

    login = (credentials) => {
        return axios.post('/auth/accounts/signin', credentials)
    }

    confirm = (credentials) => {
        return axios.post('/auth/accounts/confirm', credentials)
    }

    register = async (data) => {
        return axios.post('/auth/accounts/signup', data)
    }
}

