import axios from 'axios'

export const requestGenerico = {
    get: (url)=> axios.get(url)
}