import axios from "axios";

const api = axios.create({
    // Bloqueio https no Senac
    // baseURL:'http://viacep.com.br/ws'
 baseURL: 'http://viacep.com.br/ws'
});

export default api;