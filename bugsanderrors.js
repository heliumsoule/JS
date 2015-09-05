'use strict';

function canYouSpotTheProblem() {
	for (counter = 0; counter < 10; counter++)
		console.log('Happy Happy');
}

// canYouSpotTheProblem();
//UNCOMMENT THE ABOVE TO SEE THE ERROR

function Person(name) {
	this.name = name;
}
// var f = Person('Ferdinand');
// console.log(name);
// console.log(f);

function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(another) {
	return new Vector(this.x + another.x, this.y + another.y);
};

function testVector() {
	var p1 = new Vector(10, 20);
	var p2 = new Vector(-10, 5);
	var p3 = p1.plus(p2);

	if (p1.x !== 10) return 'fail: x property';
	if (p1.y !== 20) return 'fail: y property';
	if (p2.x !== -10) return 'fail: negative x property';
	if (p3.x !== 0) return 'fail: additon on x';
	if (p3.y !== 25) return 'fail: addition on y';
	return 'everything functioning';
}
console.log(testVector());

function numberToString(n, base) {
	var result = '', sign = '';
	if (n < 0) {
		sign = '-';
		n = -n;
	}
	do {
		result = String(n % base) + result;
		n /= base;
		n = parseInt(n);
		// UNCOMMENT THE ABOVE
	} while (n > 0)
	return sign + result;
}
console.log(numberToString(13,2));

// function promptNumber(question) {
// 	var result = Number(prompt(question, ''));
// 	if (!isNaN(result)) return null;
// 	else return result;
// }

// console.log(promptNumber('How many trees do you see?'));

function promptDirection(question) {
	var result = prompt(question, '');
	if (result.toLowerCase() == 'Left') return 'L';
	if (result.toLowerCase() == 'Right') return 'R';
	throw new Error("Invalid direction: " + result);
}

function look() {
	if (promptDirection('Which way?') == 'L')
		return 'a house';
	else 
		return 'two angry bears';
}

try {
	console.log('You see', look());
} catch (error) {
	console.log('Something went wrong');
}

var context = null;
function withContext(newContext, body) {
	var prevContext = context;
	context = newContext;
	var result = body();
	context = prevContext;
	return result;
}

//What happens if body() raises an error? In that scenario, the context would never be reset to its former value.
function withContextTwo(newContext, body) {
	var prevContext = context;
	context = newContext;
	try {
		return body();
	} finally {
		context = prevContext;
	}
}

try {
	withContextTwo(5, function() {
		if (context < 10) 
			throw new Error('Not enough context');
	});
} catch (e) {
	console.log('Ignoring ' + e);
}
console.log(context);

//Catching a specific type of exception

// for(;;) {
// 	try {
// 		withContextTwo(5, function() {
// 			if (context < 10) 
// 				throw new Error('Not enough context');

// 		});
// 	} catch (e) {
// 		console.log(context);
// 	}
// }

function InputError(message) {
	this.message = message;
	this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = 'InputError';

// for(;;) {
// 	try {
// 		var dir = promptDirection('Where?');
// 		console.log('You chose ', dir);
// 		break;
// 	} catch (e) {
// 		if (e instanceof InputError) 
// 			console.log('Not a valid direction. Try again.');
// 		else
// 			throw e;
// 	}
// }

function AssertionFailed(message) {
	this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
	if (!test) throw new AssertionFailed(message);
}

function lastElement(array) {
	assert(array.length > 0, 'Empty array in lastElement');
	return array[array.length - 1];
}

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
	if (Math.random() < .5) return a * b;
	else throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a,b) {
	var output;
	while(true) {
		try {
			output = primitiveMultiply(a, b);
			break;
		} catch (e) {
			if (e instanceof MultiplicatorUnitFailure)
				console.log('The odds are not in our favor');
			else 
				throw e;
		}
	}
	return output;
}

console.log(reliableMultiply(10,5));

var box = {
	locked: true,
	unlock: function() {this.locked = false; },
	lock: function() {this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error('Locked!');
		return this._content;
	}
};

function withBoxUnlocked(f) {
	box.unlock();
	try {
		return f();
	} finally {
		box.lock();
	}
}

withBoxUnlocked(function() {
	box.content.push("gold piece");
});

try {
	withBoxUnlocked(function() {
		throw new Error("Pirates on the horizon! Abort!");
	});
} catch (e) {
	console.log("Error raised:", e);
}
console.log(box.locked);
// → true








