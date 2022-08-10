const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
  let result = 0;
	for (let i=0; i<array.length; i++){
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
	for (let i=0; i<array.length; i++){
    result *= array[i];
  }
  return result;
};

const power = function(number, power) {
	return number**power;
};

const factorial = function(number) {
	let result = 1;
  if(number == 0){
    return result;
  } else {
    for (let i = number; i> 0; i--){
      result *= i;
    }
  }
  return result;
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
