import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burg123.firebaseio.com/'
});

export default instance;
