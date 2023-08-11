import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = {
    selectForm: document.querySelector(".breed-select"),
    loaderEl: document.querySelector(".loader"),
    errorEl: document.querySelector(".error"),
    catInfo: document.querySelector(".cat-info"),
};
const { selectForm, loaderEl, errorEl, catInfo } = refs;

refs.selectForm.addEventListener("change", createCardCat);

//Create list all breeds
fetchBreeds()
    .then(array => { return selectForm.innerHTML = createMarkup(array.data) })
    .then(() => slim())
    .catch((err) => console.log(err));

//  create breed ca
function createCardCat(event) {
    const id = event.target.value;
    // console.log(id);

    fetchCatByBreed(id)
        .then(resp => {return catInfo.innerHTML = createMarkupCat(resp.data)})
        .catch((err) => console.log(err));
}

// fetch("https://api.thecatapi.com/v1/images/search??breed_ids=abys")
//     .then((res) => res.json)
//     .then((res) => console.log(res));

// create markup list breeds
function createMarkup(array) {
    return array.map(({id, name}) => `<option value="${id}">${name}</option>`).join("");
}

// create card breed
function createMarkupCat({
    0: {
        breeds: {
        0: { name, description, temperament },
        },
        url,
    },
    }) {
    return `<img src="${url}" alt="${name}" width="500" ></img>
    <div>
        <h1>${name}</h1>
        <p>${description}</p>
        <h2>Temperament:</h2>
        <p>${temperament}</p>
    </div>`;
}

function slim() { 
    new SlimSelect({
        select: selectForm,
    })
}