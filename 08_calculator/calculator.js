const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArr) {
  var sumArr = 0;
	for (var i = 0; i <= numArr.length - 1; i++) {
    sumArr += numArr[i]
  }
  return sumArr;
};

const multiply = function(numArr) {
  var mulArr = 1;
	for (var i = 0; i <= numArr.length - 1; i++) {
    mulArr *= numArr[i]
  }
  return mulArr;
};

const power = function(num, exp) {
  return Math.pow(num, exp);
	
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
