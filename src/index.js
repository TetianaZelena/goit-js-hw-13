
import './sass/main.scss';
import { Notify } from "notiflix";
import eventsTemplatesTumb from './templates/events_tumb';
import API from './js/api-service'
import refsGet from './js/refs';

const newAPI = API.feachImages();

const refs = refsGet();

let valueForm = '';
let numberOfPages = 1;

refs.searchForm.addEventListener('submit', onSearch);
refs.BtnShowMore.addEventListener('click', onSearchBTN);

refs.BtnShowMore.style.visibility = 'hidden';

function onSearch(evt) {
   evt.preventDefault();
   refs.BtnShowMore.style.visibility = 'hidden';
   refs.galleryList.innerHTML = '';
   numberOfPages = 1
   const form = evt.currentTarget;
   valueForm = form.elements.searchQuery.value.trim();   
   imgegeHBS(valueForm, numberOfPages);       
}

function onSearchBTN(evt) {
   numberOfPages += 1;
   imgegeHBS(valueForm, numberOfPages);
   
}

function imgegeHBS(valueForm, numberOfPages) { 
   try {
      API.feachImages(valueForm, numberOfPages)
         .then(data => {
        
            if (data.totalHits === 0) {
               Notify.failure("Sorry, there are no images matching your search query. Please try again.");
               
            } else if (data.hits.length === 0) {
               refs.BtnShowMore.style.visibility = 'hidden';
               Notify.failure("We're sorry, but you've reached the end of search results.");
            } else {
                  Notify.success('Hooray! We found images.');
                  data.hits.forEach((hits) => {
                  refs.galleryList.insertAdjacentHTML('beforeend', eventsTemplatesTumb(hits));
                     refs.BtnShowMore.style.visibility = 'visible';
                      
                  })
               
            }
         })
   }
       catch (error) {
      console.log(error);
   }
};