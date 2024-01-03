const convertToCelsius = function(valF) {
  let convtC = ((valF - 32) * (5 / 9));
  if (convtC % 1 != 0) {
    return parseFloat(convtC.toFixed(1));
  } else {
    return (Math.round(((valF - 32) * (5 / 9))));
  }
};

const convertToFahrenheit = function(valC) {
  let convtF = (valC * (9 / 5) + 32);
  if (convtF % 1 != 0) {
    return parseFloat(convtF.toFixed(1));
  } else {
    return (Math.round((valC * (9 / 5) + 32)));
  }
};

//) Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
