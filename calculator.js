function add (a, b) {

	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
}

function power(a, b) {
	return Math.pow(a, b);
  }
  
  function factorial(n) {
	if (n == 0) return 1;
	let product = 1;
	for (let i = n; i > 0; i--) {
	  product *= i;
	}
	return product;
  }

 

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

console.log('Add ' + add(5,5));
console.log('Subtract ' + subtract(5,5));
console.log('Sum ' + sum([25,45,34,27]));
console.log('Multiply ' + multiply([2,10]));
console.log('Power ' + power(2,4));
console.log('Factorial ' + factorial(10));