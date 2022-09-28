const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArr) {
  let sumArr = 0;
  for(let i=0; i<numArr.length; i++){
    sumArr += numArr[i];
  }
  return sumArr;	
};

const multiply = function(numArr) {
  let product=1;
  if (numArr.length===0){
    return 0;
  }
  for(let i=0; i<numArr.length; i++){
    product *= numArr[i];
  }
  return product;	
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
