const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArr) {
  return numArr.reduce((total, num) => total + num, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((total, num) => total * num, 1);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  let arr = Array();
  if (num === 0){
    return 1;
  }
  for(let i=num; i>=1; i--){
    arr.push(i);
  }
  return multiply(arr);
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
