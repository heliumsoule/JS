var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ,'Saturday'];
function dayName(number) {
	return names[number];
}

console.log(dayName(1));

//To not spill the names variable into the global scope, try the following:
var dayName = function() {
	var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return function(number) {
		return names[number];
	}
}();

console.log(dayName(3));

(function() {
	function square(x) {
		return x*x;
	}
	var hundred = 100;

	console.log(square(100));
})();

//Objects as interfaces
var weekDay = function() {
	var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return {
		name: function(number) { return names[number]; },
		number: function(name) { return names.indexOf(name); }
	};
}();

console.log(weekDay.name(weekDay.number('Sunday')));
// (function(exports) {
// 	var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// 	exports.name = function(number) {
// 		return names[number];
// 	};

// 	exports.number = function(name) {
// 		return names.indexOf(name);
// 	};
// })(this.weekDay = {});

// console.log(weekDay.name(weekDay.number('Saturday')));





