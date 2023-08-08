import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchBreeds } from './js/cat-api';



fetchBreeds().then(resp => console.log(resp.data))