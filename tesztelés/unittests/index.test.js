// keres.test.js

const { keres } = require('bigprojekt\fejlesztés\backend\scripting\index.js'); // Útvonalazd át a tényleges útvonalra
global.document = require('jsdom').jsdom('<body></body>').defaultView.document;

jest.mock('node-fetch', () => {
  return jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      days: [
        {
          datetime: '2023-11-30',
          temp: 25,
          humidity: 60,
          pressure: 1015,
          icon: 'sunny'
        },
      ]
    })
  }));
});

test('keres updates DOM elements based on API response', async () => {
  // Az input mező értékének beállítása
  document.body.innerHTML = `
    <input class="input" value="Budapest">
    <p id="temp1"></p>
    <p id="hum1"></p>
    <p id="pres1"></p>
    <img id="img1" src="">
    <!-- további elemek -->
  `;

  // Függvény hívása
  await keres();

  // Ellenőrzések
  expect(document.getElementById("temp1").innerHTML).toBe('<b>Temperature:</b> 25 °C');
  expect(document.getElementById("hum1").innerHTML).toBe('<b>Humidity:</b> 60%');
  expect(document.getElementById("pres1").innerHTML).toBe('<b>Pressure:</b> 1015mb');
  expect(document.getElementById("img1").src).toBe('../frontend/assets/sunny.png');
  // További ellenőrzések a többi elemre
});
