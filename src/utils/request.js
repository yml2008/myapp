import axios from 'axios'

export const request = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 
    'http://localhost:2008/api' : 'http://126.36.11.23'

})

export default request