const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com/api/';
const APIkey = '22674717-9793e14b490cc19f5f21a9bc5';

const page = 1
 async function feachImages(page) {
    const response = await axios.get((`${BASE_URL}?key=${APIkey}&q=&image_type=photo&orientation=horizontal&safesearch=true&&page=${page}&per_page=40`))
  
    if (response.data.hits < 1) {
       return;
    }
    else {
       console.log(response.data)
       return response.data
       
   }
}
 export default { feachImages }
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });
