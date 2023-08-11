import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchBreeds } from './js/cat-api';

const refs = {
    selectForm: document.querySelector(".breed-select"),
    loaderEl: document.querySelector(".loader"),
    errorEl: document.querySelector(".error"),
    catInfoBlock: document.querySelector(".cat-info"),
};
const { selectForm, loaderEl, errorEl, catInfoBlock } = refs;



refs.selectForm.addEventListener("change", createCardCat);


fetchBreeds()
    .then(array => { return selectForm.innerHTML = createMarkup(array.data)})
    .catch((err) => console.log(err));


fetchCatByBreed(breedId)
    .then(resp => console.log(resp))
    .catch((err) => console.log(err));

function createCardCat(event) {
    
}

function createMarkup(array) {
    return array.map(({id, name}) => `<option value="${id}">${name}</option>`).join("");
}

function createMarkupCat() {
    
}