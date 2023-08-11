import axios from 'axios';
const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const SEARCH_URL = "https://api.thecatapi.com/v1/images/search";
const KEY = "live_plbpvaVGQwBu0yyFGTPnCrW5wc66OmE2nGTiZMgzZpirFCJyo2XSa6k0DY9qG42m";

axios.defaults.headers.common["x-api-key"] = KEY;


function fetchBreeds(){ 
return axios.get(BASE_URL)
}

function fetchCatByBreed(breedId){ 
    return axios.get(`${SEARCH_URL}?breed_ids=${breed_ids}`)
}

export{ fetchBreeds, fetchCatByBreed }