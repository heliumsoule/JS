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
	} while (n > 0)
	return sign + result;
}
console.log(numberToString(13,2));









