const convertToCelsius = function(fahrenheit) {
  // ºC = (ºF - 32)(0.5556)
  return Math.round((fahrenheit-32)*0.5556*10) / 10
;
};

const convertToFahrenheit = function(celcius) {
  // ºF = (ºC * 1.8) + 32
  return Math.round(((celcius*1.8) + 32).toFixed(1)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
