// const axios = require('axios').default;
// const BASE_URL = 'https://pixabay.com/api/';
// const APIkey = '22674717-9793e14b490cc19f5f21a9bc5';
// const filtersAPI = 'image_type=photo&orientation=horizontal&safesearch=true';
// const page = 1

//  async function feachImages(searchQuery, page) {
//     const response = await axios.get((`${BASE_URL}?key=${APIkey}&q=${searchQuery}&${filtersAPI}&page=${page}&per_page=40)`))

//     if (response.data.hits < 1) {
//        return;
//     }
//     else {
//        console.log(response.data)
//        return response.data
       
//    }
// }
const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com/api/';
const APIkey = '22674717-9793e14b490cc19f5f21a9bc5';
const filtersAPI = 'image_type=photo&orientation=horizontal&safesearch=true';

 async function feachImages(searchQuery, page) {
    const response = await axios.get(`${BASE_URL}?key=${APIkey}&q=${searchQuery}&${filtersAPI}&&page=${page}&per_page=40`)
      console.log(response.data)
      return response.data  
}
 export default { feachImages }


