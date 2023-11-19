// Beolvasás a konzolról a 'readline' modullal
const readline = require('readline');
// 'readline' interfész létrehozása a konzol bemenet és kimenet használatával
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Egy értéket bekérő függvény
function getValue(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

// °C -> °F átváltási képlet függvénye
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Main program
async function main() {
  // Celsius érték bekérése (celsiusInput) és tárolása (celsiusValue)
  var celsiusInput = await getValue('Adjon meg egy hőmérsékleti értéket Celsiusban tizedes potntosságig (pl.: 16 vagy 34.7): ');
  // Hibakezelés ',' megadása esetében
  celsiusInput = celsiusInput.replace(',', '.');
  var celsiusValue = parseFloat(celsiusInput);

  // Helyes érték ellenőrzése
  if (isNaN(celsiusValue)) {
    console.log('Helytelen érték lett megadva. Kérem adjon meg egy megfelelő értéket.');
    rl.close();
    return;
  }

  // °C -> °F
  var fahrenheitValue = celsiusToFahrenheit(celsiusValue);

  // Celsius és Fahrenheit értékek megjelenítése
  console.log(`${celsiusValue.toFixed(1)} Celsius is ${fahrenheitValue.toFixed(1)} Fahrenheit`);
  console.log(`${fahrenheitValue.toFixed(1)} Fahrenheit is ${celsiusValue.toFixed(1)} Celsius`);

  // Readline interface bezárása
  rl.close();
}

main();
