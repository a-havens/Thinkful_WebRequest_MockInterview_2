const axios = require("axios");
//Write your functions here
async function getAllCountries() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all'); 
    const countriesData= response.data;
    
    const countriesArray = countriesData.map(country => {
      return {
        name: country.name.common,
        region: country.region,
        capital: country.capital
      };
    });
    
    return countriesArray;
  } catch (error) {
    console.log(error)
    return [];
  }
  
}


//Do not modify code below this line
module.exports = {getAllCountries};