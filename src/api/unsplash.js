import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',    
    headers: {
            Authorization: 'Client-ID 1FxMgSCEvO28Ryaa7OpUEADAk-lVtGRFtyRmh0qoTVU'
        }
});