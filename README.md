Web Requests Mock Interview Retake 2

Problem

You will be using the Countries API to complete this task. You will use the countries API to pull information about countries around the world.


getAllCountries

Write a function called getAllCountries that does not take any parameters. getAllCountries should return an array of objects. Each object should have three properties: name, region, and capital.


Use this endpoint for your query: https://restcountries.com/v3.1/all


getAllCountries() 

>
>
  { name: 'Aruba', region: 'Americas', capital: [ 'Oranjestad' ] },
  
  { name: 'Afghanistan', region: 'Asia', capital: [ 'Kabul' ] },
  
  { name: 'Angola', region: 'Africa', capital: [ 'Luanda' ] },
  
  { name: 'Anguilla', region: 'Americas', capital: [ 'The Valley' ] },
  
  { name: 'Åland Islands', region: 'Europe', capital: [ 'Mariehamn' ] },
  
  { name: 'Albania', region: 'Europe', capital: [ 'Tirana' ] }
  
...

Tip: Assign the 'common' name to the countries (e.g. "name": country.name.common)


Tips for Success

Axios is provided

Use the endpoint provided to complete the tasks

Documentation

For this challenge, you may refer to official documentation resources such as the Node.js reference documentation, the Express.js Documentation and the Mozilla MDN Web Docs.
