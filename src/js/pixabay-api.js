import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '54430454-4fc9121801bd2b14b5a193f8d';

export default function getImagessByQuery(query) {
    return axios.get('', {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
}