// convert.test.js

const readline = require('readline');
const { getValue, celsiusToFahrenheit } = require('bigprojekt\fejlesztés\backend\scripting\converter.js');

jest.mock('readline');

test('celsiusToFahrenheit converts Celsius to Fahrenheit', () => {
  const celsiusValue = 25;

  const fahrenheitResult = celsiusToFahrenheit(celsiusValue);

  expect(fahrenheitResult).toBe(77);
});

test('getValue resolves with the entered value', async () => {
  const inputValue = '20';
  const mockQuestion = jest.fn();
  mockQuestion.mockReturnValueOnce(new Promise((resolve) => resolve(inputValue)));
  readline.createInterface.mockReturnValueOnce({ question: mockQuestion });

  const result = await getValue('Enter a value:');

  expect(mockQuestion).toHaveBeenCalledWith('Enter a value: ', expect.any(Function));
  expect(result).toBe(inputValue);
});

test('main function correctly converts and displays temperature', async () => {
  const mockQuestion = jest.fn();
  const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  readline.createInterface.mockReturnValueOnce({ question: mockQuestion });
  mockQuestion.mockReturnValueOnce(new Promise((resolve) => resolve('25')));

  await main();

  expect(mockLog).toHaveBeenCalledWith('25.0 Celsius is 77.0 Fahrenheit');
  expect(mockLog).toHaveBeenCalledWith('77.0 Fahrenheit is 25.0 Celsius');
});
