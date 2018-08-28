import http from '../lib/http'

export const getPosition = (_) => http.get('/static/position.json')
export const getIndustry = (_) => http.get('/static/industry.json')