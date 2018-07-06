import axios from 'axios'
import {userLogin, userUpdate, userRegister} from '../api/user'
import {getRedirectPath} from '../lib/util'
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'
const initState={
    redirectTo: '',
    isAuth: '',
    mgs: '',
    user: '',
    type: ''
}


export function regisger({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不相同')
    }
    return dispatch=> {
        userRegister({user, pwd, type}).then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess({user,pwd,type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                } 
            })
    }

}
export function loginfn({user, pwd}) {
    
    // if( !user || !pwd) {
    //     console.log(user, pwd)
    //     return errorMsg('用户名密码必须输入')
    // }
    return dispatch=> {
        userLogin({user, pwd}).then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function logoutSubmit() {
    return {type: LOGOUT_SUCCESS}
}

export function update(data) {
    return dispatch=> {
        userUpdate(data).then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export function loadData(userInfo) {
    return {type: LOAD_DATA, payload: userInfo}
}
function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}


function authSuccess(obj) {
    const {pwd, ...data} = obj
    console.log(data)
    return {type: AUTH_SUCCESS, payload: data}
}
//reducer
export function user(state=initState, action) {
    switch(action.type) {
        case AUTH_SUCCESS: 
        return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case LOAD_DATA: 
            return {...state, ...action.payload}
        case LOGOUT_SUCCESS: 
            return  {...initState, redirectTo: '/login'}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }
    return state
}