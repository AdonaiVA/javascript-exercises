const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  let resultado = 0;
  for (let i = 0; i <= array.length-1; i++){
    resultado += array[i];
  }
  return resultado;
};

const multiply = function(x,y) {
  return x*y;
};

const power = function(x,y) {
	let numero = 1;
  for (let i = 1; i <= y; i++){
    numero = (numero * x);
  }
  return numero;
};

const factorial = function(x) {
	let factorial = 1;
  for (let i = 1; i <= x; i++){
    factorial = (factorial * i);
  }
  return factorial;
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
