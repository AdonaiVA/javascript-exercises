const convertToCelsius = function(temperatura) {
  let celcius = 0;
  
  celcius = (temperatura - 32)*(5/9);

  return Math.round(celcius);
};

const convertToFahrenheit = function(temperatura) {
  let fahrenheit = 0;
  fahrenheit = (temperatura * 9/5) + 32;
  return Math.round(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
