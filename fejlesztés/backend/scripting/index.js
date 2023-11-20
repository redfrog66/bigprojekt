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
var cels=true;
var teszt_varos="budapest";
var api_key = "JG5A6TC3EWVAZC5W6P3JZAUGR" 
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
//document.querySelector('.btn-icon-content').addEventListener('click', function() {
// Függvény a város időjárásának lekérdezésére
  function keres(){
  var api_key = "JG5A6TC3EWVAZC5W6P3JZAUGR" 
  let town = document.querySelector('.input').value;
  let lowerCaseTown = town.toLowerCase();

  let today = new Date();
  let sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(today.getDate() + 7);

  let startDate = today.toISOString().split('T')[0];
  let endDate = sevenDaysFromNow.toISOString().split('T')[0];

  //let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lowerCaseTown}/${startDate}/${endDate}?unitGroup=metric&key=${api_key}&contentType=json`;
  // API hívás URL-je
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lowerCaseTown}/${startDate}/${endDate}?unitGroup=metric&key=${api_key}&contentType=json`;
  // Fetch API hívás
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
    // Adatok feldolgozása és kiírása
    .then(data => {
      if (!data.days || data.days.length === 0) {
        console.log('No data returned. Please check the town name.');
      } else {
        data.days.forEach(day => {
          // Dátumok létrehozása és összehasonlítása a jövőbeli napokkal, azonosított dátum alapján adatok frissítése
          let splited = day.datetime.split("-");
          var test = new Date(splited[0],splited[1]-1,splited[2]);
          console.log(test);
          var ma=new Date();
          ma=new Date(ma.getFullYear(),ma.getMonth(),ma.getDate())
          var ma1=new Date(ma);
          ma1.setDate(ma.getDate()+1);
          var ma2=new Date(ma);
          ma2.setDate(ma.getDate()+2);
          var ma3=new Date(ma);
          ma3.setDate(ma.getDate()+3);
          var ma4=new Date(ma);
          ma4.setDate(ma.getDate()+4);
          var ma5=new Date(ma);
          ma5.setDate(ma.getDate()+5);
          var ma6=new Date(ma);
          ma6.setDate(ma.getDate()+6);
          var ma7=new Date(ma);
          ma7.setDate(ma.getDate()+7);

          
          // Napra való speciális adatok frissítése
          if(test.getTime()==ma.getTime()){
          document.getElementById("temp1").innerHTML=`<b>Temperature:</b> ${day.temp} °C`;
          document.getElementById("hum1").innerHTML=`<b>Humidity:</b> ${day.humidity}%`;
          document.getElementById("pres1").innerHTML=`<b>Pressure:</b> ${day.pressure}mb`;
          }
          if(test.getTime()==ma1.getTime()){
            document.getElementById("temp2").innerHTML=`${day.temp} °C`;
            document.getElementById("date2").innerHTML=`${day.datetime}`;
          }
          if(test.getTime()==ma2.getTime()){
            document.getElementById("temp3").innerHTML=`${day.temp} °C`;
            document.getElementById("date3").innerHTML=`${day.datetime}`;
          }
          if(test.getTime()==ma3.getTime()){
            document.getElementById("temp4").innerHTML=`${day.temp} °C`;
            document.getElementById("date4").innerHTML=`${day.datetime}`;
          }
          if(test.getTime()==ma4.getTime()){
            document.getElementById("temp5").innerHTML=`${day.temp} °C`;
            document.getElementById("date5").innerHTML=`${day.datetime}`;
          }
          if(test.getTime()==ma5.getTime()){
            document.getElementById("temp6").innerHTML=`${day.temp} °C`;
            document.getElementById("date6").innerHTML=`${day.datetime}`;
          }
          if(test.getTime()==ma6.getTime()){
            document.getElementById("temp7").innerHTML=`${day.temp} °C`;
            document.getElementById("date7").innerHTML=`${day.datetime}`;
          }
          if(test.getTime()==ma7.getTime()){
            document.getElementById("temp8").innerHTML=`${day.temp} °C`;
            document.getElementById("date8").innerHTML=`${day.datetime}`;
          }


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
};
//);





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
// Függvény a hőmérséklet átváltására Celsius és Fahrenheit között
function convert(){
  // Ellenőrzi, hogy a "cels" globális változó nincs definiálva
  if(!cels){
    let temps= document.getElementsByClassName("temps");
    cels=true;
    document.getElementById("convert").innerText="Change to °C";
    var faren;
    // Végigiterálás a "temps" elemein, Fahrenheit konverzió és frissítés az "temps" elemekben 
    for(let i = 0; i<temps.length;i++){
      faren=temps[i].textContent.split(" ")[0];
      console.log(faren);
      console.log((faren*1.8)+32);
      faren=Math.round((faren*1.8)+32,1);
      temps[i].innerHTML=`${faren} °F`;
    }
    
  }else{
    // Ha a "cels" értéke hamis akkor az előző ciklussal ellentétben celsiusra váltja át az értéket
    let temps= document.getElementsByClassName("temps");
    cels=false;
    document.getElementById("convert").innerText="Change to °F";
    var celsius;
    for(let i = 0; i<temps.length;i++){
      celsius=temps[i].textContent.split(" ")[0];
      console.log(celsius);
      console.log((celsius-32)/1.8);
      celsius = Math.round((celsius-32)/1.8,1);
      temps[i].innerHTML=`${celsius} °C`;
    }
  }
  convertKulon();

}
function convertKulon(){
  if(!cels){
    let temps= document.getElementsByClassName("tempskulon");
    
    
    var faren;
    for(let i = 0; i<temps.length;i++){
      faren=temps[i].textContent.split(" ")[1];
      console.log(faren);
      console.log((faren*1.8)+32);
      faren=Math.round((faren*1.8)+32,1);
      temps[i].innerHTML=`Temperature: ${faren} °F`;
    }
    
  }else{
    let temps= document.getElementsByClassName("tempskulon");
    var celsius;
    for(let i = 0; i<temps.length;i++){
      celsius=temps[i].textContent.split(" ")[1];
      console.log(celsius);
      console.log((celsius-32)/1.8);
      celsius = Math.round((celsius-32)/1.8,1);
      temps[i].innerHTML=`Temperature: ${celsius} °C`;
    }
  }
}
