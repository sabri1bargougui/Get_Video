import axios from 'axios';
const Key = 'AIzaSyB6gR8DlbMNrQ0WfXHSbuPdbngnTsLKYWI';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: Key,

    }
});