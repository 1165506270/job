import {getPosition, getIndustry} from '../api/common'
const SET_POSITION = 'SET_POSITION'
const SET_INDUSTRY = 'SET_INDUSTRY'
const initState={
    position: [],
    industry: [],
}


export function setPosition() {
    return dispatch=> {
        getPosition().then(res => {
            const {data} = res
            dispatch({type: SET_POSITION, payload: {position: data}})
        })
    }
}
export function setIndustry() {
    return dispatch => {
        getIndustry().then(res => {
            const {data} = res;
            console.log(data)
            dispatch({type: SET_INDUSTRY, payload: {industry: data}})
        })
    }
}
//reducer
export function global(state=initState, action) {
    switch(action.type) {
        case SET_POSITION: 
            return {...state, ...action.payload}
        case SET_INDUSTRY: 
            return {...state, ...action.payload}
        default:
            return state
    }
}