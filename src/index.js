import './sass/main.scss';
import Notiflix from "notiflix";
import debounce from 'lodash.debounce';
// const debounce = require('lodash.debounce');
import eventsTemplatesTumb from './templates/events_tumb';
import API from './js/api-service'
import refsGet from './js/refs';

const newAPI =  API.feachImages();

const refs = refsGet();

let valueForm = '';
let numberOfPages = 1;

// refs.BtnShowMore.classList.add('is-hidden');

 
refs.searchForm.addEventListener('submit', onSearch);
refs.BtnShowMore.addEventListener('click', onSearchBTN)
refs.BtnShowMore.style.visibility = 'hidden';
function onSearch(evt) {
   evt.preventDefault();
   
   const form = evt.currentTarget;
   valueForm = form.elements.searchQuery.value.trim();
console.log(valueForm)
   try {
   API.feachImages(valueForm, numberOfPages)
      .then(function renderCartEmage(data ) {
        
         data.hits.forEach(function (hits, totalHits) {
            
            if (valueForm === '') {
               clearCartEmage();
               return Notiflix.Notify.warning('ops! Nothing is entered!');
            } else if (hits === 0) {
                  refs.BtnShowMore.style.visibility = 'hidden';;
                  Notify.failure("We're sorry, but you've reached the end of search results.");
               } else {
                  // loadBtnMore();
                //   numberOfPages = Math.ceil(totalHits / 40);
                   refs.BtnShowMore.style.visibility = 'visible';
       
                  return Notiflix.Notify.success('Hooray! We found ${hit} images.'),
                     refs.galleryList.insertAdjacentHTML('beforeend', eventsTemplatesTumb(hits));
               }
            }) 
})
}
   catch (error) {
      console.log(error);
   }
}

function onSearchBTN(evt) {
    numberOfPages += 1;
    onSearch(valueForm, numberOfPages);
}
   
function clearCartEmage() {
refs. galleryList.innerHTML = '';
}


// function loadBtnMore(images, totalHits) {
//      if (images === 0) {
//          refs.BtnShowMore.style.visibility = 'hidden';;
//          Notify.failure("We're sorry, but you've reached the end of search results.");
//      } else {
//         numberOfPages = Math.ceil(totalHits / 40)
//         console.log(numberOfPages)
//          refs.BtnShowMore.style.visibility = 'visible';;;
//       }
// }