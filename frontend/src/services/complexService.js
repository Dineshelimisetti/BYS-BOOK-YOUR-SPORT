import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:5000/api/complexes' })

const getAll = () => API.get('/').then(res => res.data)

export default { getAll }
