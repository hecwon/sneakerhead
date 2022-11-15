const axios = require('axios');
require('dotenv').config()

const options = {
  method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  params: {limit: '100', page: '76', brand: 'JORDAN '},
  headers: {
    'X-RapidAPI-Key': x-rapidapi-key,
    'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com'
  }
};

const getSneakers = axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

export default getSneakers;
