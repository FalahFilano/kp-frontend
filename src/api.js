import axios from "axios";
import SessionManager from "./utils/session";

const BASE_URL = 'http://localhost:8000'

const request = axios.create({
    baseURL: BASE_URL
});

export const login = (params, successCallback = null, errorCallback = null) => {
    request.post('/api/login', params)
        .then(res => {
            let data = res.data.data;
            SessionManager.login(data);
            if (successCallback != null)
                successCallback(data)
            else
                console.log(data);
        })
        .catch(error => {
            let message = 'Unexpected error, try again later.';
            if (error.response) {
                let data = error.response.data;
                message = data.error.message;
            } else if (error.request) {
                message = error.request;
            } 

            if (errorCallback != null)
                errorCallback(message);
            else
                console.log(message);
        });
}

export const register = (params, successCallback = null, errorCallback = null) => {
    request.post('/api/register', params)
        .then(res => {
            if (successCallback != null)
                successCallback(res.data);
            else
                console.log(res.data);
        })
        .catch(error => {
            let message = 'Unexpected error, try again later.';
            if (error.response) {
                let data = error.response.data;
                message = data[Object.keys(data)[0]][0];
            } else if (error.request) {
                message = error.request;
            } 

            if (errorCallback != null)
                errorCallback(message);
            else
                console.log(message);
        });
}