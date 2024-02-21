import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function emailLogin(email, password) {
    try {
        const request = await axios.post(`${API_URL}/auth/login`, {
            email: email,
            password: password
        });
        return request;
    } catch (error) {
        console.error(error);
        return error
    }
}

export async function emailRegister(data) {
    try {
        const request = await axios.post(`${API_URL}/auth/register`, {data});
        return request;
    } catch (error) {
        console.error(error);
        return error
    }
}

export async function emailLogout(data) {
    try {
        const request = await axios.post(`${API_URL}/auth/logout`, {data});
        return request;
    } catch (error) {
        console.error(error);
        return error
    }
}