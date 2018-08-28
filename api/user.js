import http from '../lib/http'

export const userLogin = (data) => http.post('/login', data)
export const userTest = (data) => http.get('/test', data)
export const userUpdate = (data) => http.post('/user/update', data)
export const userRegister = (data) => http.post('/register', data)