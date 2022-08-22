import http from "./http.js";

export async function login(login, password) {
    const { data } = await http.post('auth/login', { login, password })

    return data
}