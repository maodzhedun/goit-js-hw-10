import axios from 'axios';
const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const KEY = "live_plbpvaVGQwBu0yyFGTPnCrW5wc66OmE2nGTiZMgzZpirFCJyo2XSa6k0DY9qG42m";

axios.defaults.headers.common["x-api-key"] = KEY;


function fetchBreeds(){ 
return axios.get(BASE_URL)
}

export{ fetchBreeds }