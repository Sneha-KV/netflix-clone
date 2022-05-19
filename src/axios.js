import axios from "axios";

const tmdb_instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default tmdb_instance;