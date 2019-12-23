const KEY = "asdf";

export default class SessionManager {
    static login = (data) => {
        localStorage.setItem(KEY, JSON.stringify(data));
    }

    static logout = () => {
        localStorage.removeItem(KEY);
    }

    static getToken = () => {
        let data = JSON.parse(localStorage.getItem(KEY));

        return data ? data.token : null;
    }

    static getTokenWithType = () => {
        let data = JSON.parse(localStorage.getItem(KEY));

        return data ? data.token_type + ' ' + data.token : null;
    }

    static getUser = () => {
        let data = JSON.parse(localStorage.getItem(KEY));

        return data ? data.user : null;
    }

    static isLoggedIn = () => {
        let token = SessionManager.getToken();

        return token !== "" && token != null;
    }
}