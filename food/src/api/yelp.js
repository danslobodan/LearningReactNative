import axios from "axios";
import secrets from '../../secrets.json'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${secrets.YELP_API_KEY}`
    }
});