import axios from 'axios';

const AxiosApi = axios.create({
    baseURL: 'http://localhost/'
})

const Api = {
    loadGenres: () => {
        return AxiosApi.get('genres')
    }
}


export default Api;