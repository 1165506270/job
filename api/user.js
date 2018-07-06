import http from '../lib/http'

export const userLogin = (data) => http.post('/user/login', data)
export const userUpdate = (data) => http.post('/user/update', data)
export const userRegister = (data) => http.post('/user/register', data)