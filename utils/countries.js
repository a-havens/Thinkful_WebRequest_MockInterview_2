const axios = require("axios");

async function getAllCountriesSolution() {
  const res = await axios.get(`https://run.mocky.io/v3/4a21cd58-72bb-4360-913e-e9c9fd778c06`)
  //const res = await axios.get(`https://restcountries.eu/rest/v2/all`)
  let countries = res.data.map(country => {
    return {"name": country.name.common, "region": country.region, "capital": country.capital} 
  })
  return countries
}

async function getCountriesByLanguageSolution(language) {
  if(language.length !== 2) return "Language code not found"
  const res = await axios.get(`https://restcountries.eu/rest/v2/lang/${language}`)
  let refinedCountries = res.data.map(country => {
    return {"name": country.name, "region": country.region} 
  })
  return refinedCountries
}

module.exports = {getAllCountriesSolution, getCountriesByLanguageSolution}