import axios, { AxiosError } from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()


const calendarApi = axios.create({
    baseURL: VITE_API_URL,
    withCredentials: true,
});

// // Todo: configurar interceptores
calendarApi.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.isAxiosError) {
            const {response} = error as AxiosError
            const err = response?.data
            return Promise.reject(err)
        }
    },
)


export default calendarApi;


