// Random számok generálása -100-tól 100-ig
let randomFahrenheitValue = Math.floor(Math.random() * 201) - 100;
let randomCelsiusValue = Math.floor(Math.random() * 201) - 100;

// °F -> °C képlet
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// °C -> °F képlet
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// °F -> °C random számra
let convertedCelsius = fahrenheitToCelsius(randomFahrenheitValue);
console.log(`${randomFahrenheitValue} Fahrenheit is ${convertedCelsius.toFixed(2)} Celsius`);

// °C -> °F random számra
let convertedFahrenheit = celsiusToFahrenheit(randomCelsiusValue);
console.log(`${randomCelsiusValue} Celsius is ${convertedFahrenheit.toFixed(2)} Fahrenheit`);
