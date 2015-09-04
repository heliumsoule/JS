var square = function(x) {
	return x*x;
};

// console.log(square(12));

var makeNoise = function() {
	console.log("PING");
};

// console.log(makeNoise());

var power = function(base, power) {
	var result = 1;
	for(var count = 0; count < power; count++) {
		result *= base;
	}
	return result;
}

// console.log(power(2,4));

//LOCAL and GLOBAL functions

var x = "outside";

var f1 = function() {
	var x = "inside f1";
}();

console.log(x);

var f2 = function() {
	x = "inside f2";
}();

// console.log(x);

// var something = 1;
// console.log(something);
// {
// 	var something = 2;
// }

// console.log(something);

function square(x) {
	return x*x;
}

//What's a practice to be wary of? The practice below is dangerous because the bool may not necessarily be true.
// function learn() {
// 	function a() {} // OKAY
// 	if (bool) {
// 		function b() {} //DANGEROUS
// 	}
// }

//Order in which functios are executed depends on the call stack. However, you can exceed it with an infinite loop.
// function chicken() {
// 	return egg();
// }

// function egg() {
// 	return chicken();
// }

// console.log(chicken());

//Closure: being able to reference a specific instance of a local variable
function wrapValue(n) {
	var localVariable = n;
	return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

function  scale(factor) {
	return function(number) {
		return number * factor;
	};
}

twice = scale(2);
// console.log(twice(10));

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	else 
		return base * power(base, exponent - 1);
}

function findSolution(target) {
	function find(start, history) {
		if (start == target) {
			return history;
		}
		else if (start > target) {
			return null;
		}
		else return find(start + 5, "(" + history + " + 5)") ||
					find(start * 3, "(" + history + " * 3)");
	}
	return find(1,"1");
}

// console.log(findSolution(27));

function zeroPad(number, width) {
	number = String(number);
	while(number.length < width) 
		number = "0" + number;
	return number;
}

function printFarmInventory(cows, chicken, pigs) {
	console.log(zeroPad(cows, 3) + " Cows");
	console.log(zeroPad(chicken, 3) + " Chicken");
	console.log(zeroPad(pigs, 3) + " Pigs");
}

// printFarmInventory(7, 9, 11);

//Exercises
function min(a,b) {
	if (a > b) return b;
	else if (b > a) return a;
	else return a;
}

// console.log(min(4,4));

function modulo(input) {
	if (input >= 0) {
		if (input == 0) {
			return 0;
		}
		else if (input == 1) {
			return 1;
		}
		else {
			return modulo(input - 2);
		}
	}
	else {
		return modulo(input + 2);
	}
}

// console.log(modulo(50));
// console.log(modulo(75));
// console.log(modulo(-1));

function countUpper(str, upB) {
	var counter = 0;
	for(var count = 0; count < str.length; count++) {
		if (str.charAt(count) == upB) counter++;
	}
	return counter;
}

console.log(countUpper("ABCDEFGHI", "K"));


