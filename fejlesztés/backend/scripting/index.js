// Az index page-ünkhöz tartozó scriptek helye
/* A lényeg, hogy megadott városról nyerjük ki a számunkra szükséges adatokat az adott napon, és a rákövetkező X napra.
  Ehhez az egyik példaprojekthez hasonlóan API hívásra támaszkodunk.
*/

// run: node index.js

/* Fejlesztés menete:
 Első lépés: Változóban tárolt város alapján keresés
 Második lépés: Random város keresése - egyelőre billentyűzetről olvasva, helyesen írva
 Harmadik lépés: bekért városnév kisbetűssé alakítása, hogy ne függjön a felhasználó által beírt városnévtől (legalábbis ebből a szempontból)
 Negyedik lépés: 7 napos időjárás előrejelzés kinyerése a városról
 Ötödik lépés: specifikus adatok kinyerése a városról 
 */

// node.js számára szükséges konstansok
// KONSTANSOK
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// vÁLTOZÓK
let api_key = "JG5A6TC3EWVAZC5W6P3JZAUGR" 
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${teszt_varos}?unitGroup=metric&key=${api_key}&contentType=json`;
 


/*
// NODE.JS SZÁMÁRA MEGFELELŐ VERZIÓ, MEGELŐZŐ TESZTEK ÉRDEKÉBEN
rl.question('Please enter the town name: ', (town) => {

  let lowerCaseTown = town.toLowerCase();

  let today = new Date();
  let sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(today.getDate() + 7);

  let startDate = today.toISOString().split('T')[0];
  let endDate = sevenDaysFromNow.toISOString().split('T')[0];


  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lowerCaseTown}/${startDate}/${endDate}?unitGroup=metric&key=${api_key}&contentType=json`;

  import('node-fetch').then(module => { // fetch, node.js-ben, hogy terminálon tudjam tesztelni a kódot
    module.default(url)
      .then(response => {
        if (!response.ok) {
          if (response.status === 400) {
            throw new Error('Town name not recognized. Please check your spelling.');
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then(data => {
        if (!data.days || data.days.length === 0) {
          console.log('No data returned. Please check the town name.');
        } else {
          data.days.forEach(day => {
            console.log(`Date: ${day.datetime}, 
                          Temperature: ${day.temp}, 
                          Humidity: ${day.humidity}, 
                          Icon: ${day.icon}, 
                          Wind speed: ${day.windspeed}, 
                          Pressure: ${day.pressure} `);
          });
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });

  rl.close();
});
*/
// A FELÜLETTEL VALÓ ÖSSZEKAPCSOLÁSRA ALKALMAS VERZIÓ
document.querySelector('.btn-icon-content').addEventListener('click', function() {
  let town = document.querySelector('.input').value;
  let lowerCaseTown = town.toLowerCase();

  let today = new Date();
  let sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(today.getDate() + 7);

  let startDate = today.toISOString().split('T')[0];
  let endDate = sevenDaysFromNow.toISOString().split('T')[0];

  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lowerCaseTown}/${startDate}/${endDate}?unitGroup=metric&key=${api_key}&contentType=json`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Town name not recognized. Please check your spelling.');
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
      return response.json();
    })
    .then(data => {
      if (!data.days || data.days.length === 0) {
        console.log('No data returned. Please check the town name.');
      } else {
        data.days.forEach(day => {
          console.log(`Date: ${day.datetime}, 
                        Temperature: ${day.temp}, 
                        Humidity: ${day.humidity}, 
                        Icon: ${day.icon}, 
                        Wind speed: ${day.windspeed}, 
                        Pressure: ${day.pressure} `);
        });
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
});





// Az összes adat, amit a városról meg tudunk szerezni egy napra:
/* 
      datetime: '2023-11-16',
      datetimeEpoch: 1700089200,
      tempmax: 12.8,
      tempmin: 6,
      temp: 9.6,
      feelslikemax: 12.8,
      feelslikemin: 3.3,
      feelslike: 8.6,
      dew: 5,
      humidity: 73.6,
      precip: 2.7,
      precipprob: 71.4,
      precipcover: 12.5,
      preciptype: [Array],
      snow: 0,
      snowdepth: 0,
      windgust: 28.1,
      windspeed: 25.9,
      winddir: 258.1,
      pressure: 1017,
      cloudcover: 58.6,
      visibility: 17.6,
      solarradiation: 73.3,
      solarenergy: 6.3,
      uvindex: 4,
      severerisk: 10,
      sunrise: '06:49:30',
      sunriseEpoch: 1700113770,
      sunset: '16:07:00',
      sunsetEpoch: 1700147220,
      moonphase: 0.11,
      conditions: 'Rain, Partially cloudy',
      description: 'Becoming cloudy in the afternoon with late afternoon rain.',
      icon: 'rain',
      stations: [Array],
      source: 'comb',
      hours: [Array]
*/