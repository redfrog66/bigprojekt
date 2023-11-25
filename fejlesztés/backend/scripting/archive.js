// Visszamenő adatok hozzáférése

// Ezen a felületen a visszamenő adatokat lehet lekérdezni. Olyan API-val dolgozunk, ahol 30 napig visszamenőleg tudjuk lekérni az adatokat.
// Ennél régebbihez már nem férünk hozzá, ugyanis előfizetéshez kötött a szolgáltatás. Egy nagyobb szabású projekt esetén érdemes lehet előfizetni.

// Cél: adott nap visszamenőlegi adatok lekérdezése, adott helyre
// 1. node.js segítségével terminálra tudjuk kiírni a lekérdezett adatokat
/* 
    1.1 Adott városra - azaz az index.js már működő kódjának átvétele
    1.2 Adott napra - azaz a dátumokat is be kell vinni
*/
// 2. Felülettel összeköthetővé alakítjuk a kódot
/*
    2.1 Adott városra - azaz a felületen be kell írni a várost
    2.2 Adott napra - azaz a felületen be kell írni a dátumot
*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1.1 Adott városra - azaz az index.js már működő kódjának átvétele
// NODE.JS SZÁMÁRA MEGFELELŐ VERZIÓ, MEGELŐZŐ TESZTEK ÉRDEKÉBEN
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/
var cels=true;
let api_key = "JG5A6TC3EWVAZC5W6P3JZAUGR" 

/*
rl.question('Please enter the town name: ', (town) => {

    let lowerCaseTown = town.toLowerCase();
  
    let testDay = new Date();
  
    let testDate = testDay.toISOString().split('T')[0];

  
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lowerCaseTown}/${testDate}?unitGroup=metric&key=${api_key}&contentType=json`;
  
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
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function archiveSearch() { //TODO: gomb megfelelő azonosítója
    let town = document.getElementById("varos").value; //TODO: input megfelelő azonosítója
    let lowerCaseTown = town.toLowerCase();
  
    let searchDate = document.getElementById("datum").value; //TODO: input megfelelő azonosítója

    //let searchDate = searchDay.toISOString().split('T')[0];
    // API hívás URL-je
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lowerCaseTown}/${searchDate}?unitGroup=metric&key=${api_key}&contentType=json`;
    // Fetch API hívás
    fetch(url)
      .then(response => {
        // Hibakezelés
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
        // Adatok feldolgozása és kiírása a konzolra
        if (!data.days || data.days.length === 0) {
          console.log('No data returned. Please check the town name.');
        } else {
          data.days.forEach(day => {
            
            document.getElementById("temp").innerHTML=`<b>Temperature:</b> ${day.temp} °C`;
            document.getElementById("hum").innerHTML=`<b>Humidity:</b> ${day.humidity}%`;
            document.getElementById("pre").innerHTML=`<b>Pressure:</b> ${day.pressure}mb`;

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


  function convertArch(){
    // Ellenőrzi, hogy a "cels" globális változó nincs definiálva
    if(!cels){
      let temps= document.getElementsByClassName("temps");
      cels=true;
      document.getElementById("convert").innerText="Change to °C";
      var faren;
      // Végigiterálás a "temps" elemein, Fahrenheit konverzió és frissítés az "temps" elemekben 
      for(let i = 0; i<temps.length;i++){
        faren=temps[i].textContent.split(" ")[1];
        console.log(faren);
        console.log((faren*1.8)+32);
        faren=Math.round((faren*1.8)+32,1);
        temps[i].innerHTML=`<b>Temperature:</b> ${faren} °F`;
      }
      
    }else{
      // Ha a "cels" értéke hamis akkor az előző ciklussal ellentétben celsiusra váltja át az értéket
      let temps= document.getElementsByClassName("temps");
      cels=false;
      document.getElementById("convert").innerText="Change to °F";
      var celsius;
      for(let i = 0; i<temps.length;i++){
        celsius=temps[i].textContent.split(" ")[1];
        console.log(celsius);
        console.log((celsius-32)/1.8);
        celsius = Math.round((celsius-32)/1.8,1);
        temps[i].innerHTML=`<b>Temperature:</b> ${celsius} °C`;
      }
    }
  
  }
