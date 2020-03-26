import axios from 'axios'

const backend = axios.create({baseURL: 'http://localhost:3003'})

export default backend