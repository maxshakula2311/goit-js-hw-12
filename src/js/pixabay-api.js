import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '54430454-4fc9121801bd2b14b5a193f8d';

export default async function getImagesByQuery(query, page = 1, perPage = 15) {
    const response = await axios.get('', {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page,
            per_page: Math.max(perPage, 15),
        },
    });
    return response;
}