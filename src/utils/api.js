import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': 'e9f7a72db8mshd5ffa58560bed95p13c2b6jsnfe3efbc2a744',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
