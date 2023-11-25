// archive_test.js
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

jest.mock('node-fetch');

test('archiveSearch fetches weather data and updates the DOM', async () => {
  const mockData = {
    days: [
      {
        datetime: '2022-01-01',
        temp: 20,
        humidity: 50,
        pressure: 1000
      }
    ]
  };

  fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockData),
  });

  const dom = new JSDOM(`<!DOCTYPE html><input id="varos" value="Budapest"><input id="datum" value="2022-01-01"><p id="temp"></p><p id="hum"></p><p id="pre"></p>`);
  global.document = dom.window.document;

  // Call your function here and wait for it to finish
  await archiveSearch();

  // Check the results
  expect(document.getElementById("temp").innerHTML).toBe('<b>Temperature:</b> 20 °C');
  expect(document.getElementById("hum").innerHTML).toBe('<b>Humidity:</b> 50%');
  expect(document.getElementById("pre").innerHTML).toBe('<b>Pressure:</b> 1000mb');

  // Check if fetch was called with the correct arguments
  expect(fetch).toHaveBeenCalledWith(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/budapest/2022-01-01?unitGroup=metric&key=${api_key}&contentType=json`);
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const convertArch = require('./fejlesztés/backend/scripting/archive.js');
let cels = false;

test('convertArch converts temperature from Celsius to Fahrenheit and vice versa', () => {
  const dom = new JSDOM(`<!DOCTYPE html><p class="temps"><b>Temperature:</b> 20 °C</p><button id="convert">Change to °F</button>`);
  global.document = dom.window.document;

  // Call your function here
  convertArch();

  // Check the results
  expect(document.getElementsByClassName("temps")[0].innerHTML).toBe('<b>Temperature:</b> 68 °C');
  expect(document.getElementById("convert").innerText).toBe('Change to °C');

  // Call your function again to convert back to Celsius
  convertArch();

  // Check the results
  expect(document.getElementsByClassName("temps")[0].innerHTML).toBe('<b>Temperature:</b> 20 °C');
  expect(document.getElementById("convert").innerText).toBe('Change to °F');
});