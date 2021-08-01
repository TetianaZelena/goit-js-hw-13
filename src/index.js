import './sass/main.scss';
import Notiflix from "notiflix";
import debounce from 'lodash.debounce';
// const debounce = require('lodash.debounce');
import eventsTemplatesTumb from './templates/events_tumb';
import API from './js/api-service'
import refsGet from './js/refs';

const refs = refsGet();

let valueForm = '';
let numberOfPages = 0;

refs.searchForm.addEventListener('submit', onSearch);


function onSearch(e) {
   e.preventDefault();
   const form = e.currentTarget;
   form.reset();
   const valueForm = form.elements.searchQuery.value.trim();
   
    try {
   API.feachImages(valueForm)
      .then(function renderCartEmage(data) {
   
   data.hits.forEach(function (hit, totalHits ) {
     if (valueForm === '') {
         clearCartEmage();
         return Notiflix.Notify.warning('ops! Nothing is entered!');
      }
      else  {
         numberOfPages = Math.ceil(totalHits / 40);  
         clearCartEmage();
         return Notiflix.Notify.success(`Hooray! We found ${hit} images.`),
            refs.galleryList.insertAdjacentHTML('beforeend', eventsTemplatesTumb(hit));
      }

   })
})
}
   catch (error) {
      console.log(error);
   }
}
   
function clearCartEmage() {
refs. galleryList.innerHTML = '';
}


// const value = Object.values(hit.tags);
      // console.log(value.join(' '))