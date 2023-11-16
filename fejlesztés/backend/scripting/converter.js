const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getValue(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

async function main() {
  var celsiusInput = await getValue('Adjon meg egy hőmérsékleti értéket Celsiusban tizedes potntosságig (pl.: 16 vagy 34.7): ');
  var celsiusValue = parseFloat(celsiusInput);

  if (isNaN(celsiusValue)) {
    console.log('Helytelen érték.');
    rl.close();
    return;
  }

  var fahrenheitValue = celsiusToFahrenheit(celsiusValue);
  
  console.log(`${celsiusValue.toFixed(1)} Celsius is ${fahrenheitValue.toFixed(1)} Fahrenheit`);
  console.log(`${fahrenheitValue.toFixed(1)} Fahrenheit is ${celsiusValue.toFixed(1)} Celsius`);

  rl.close();
}

main();
