import {redirect} from "react-router-dom";

export function getTokenDuration() {
    const storedExpDate = localStorage.getItem('expiration');
    const expDate = new Date(storedExpDate);

    const now = new Date();
    const duration = expDate.getTime() - now.getTime();
    return duration;

}

export function getAuthToken() {
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    if (!token) {
        return null;
    }
    return token;
}

export function tokenLoader() {
    return getAuthToken()
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}