import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:5000/api/bookings' })

const create = data => API.post('/', data)
const getAll = () => API.get('/').then(res => res.data)

export default { create, getAll }
