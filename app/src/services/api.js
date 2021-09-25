import axios from 'axios';

const api = axios.create({
   //sempre usar em maiúsculo  o URL!!!
   baseURL: 'http://10.0.0.8:8000',
});

export default api;