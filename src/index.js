import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createMarkupCat } from './js/template/createMarkup';

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
    .then(array => {
        load();
        selectForm.innerHTML = createMarkup(array.data)
        slim();
    })
    
    .catch(fetchErrors);

//  create breed ca
function createCardCat(event) {
    const id = event.target.value;
  
    fetchCatByBreed(id)
        
        .then(resp => {
            load();
            catInfo.innerHTML = createMarkupCat(resp.data)
            success();
        })
        .catch(fetchErrors);
}

function load() { 
    selectForm.hidden = false;
    loaderEl.classList.remove("loader");
}

function fetchErrors() {
    Report.failure(errorEl.textContent, '');
    loaderEl.classList.remove("loader");
}

function success() {
    Notify.success('Data load success', '');
}


function slim() { 
    new SlimSelect({
        select: selectForm,
    })
}

//Loading data, please wait...