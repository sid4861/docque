import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://docque-e6f1f.firebaseio.com/'
});

export default AxiosInstance;