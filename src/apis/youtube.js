import axios from 'axios';
const Key = 'your api key';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: Key,

    }
});
