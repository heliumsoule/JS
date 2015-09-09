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

//Interpreting data as code

function evalAndReturnX(code) {
	eval(code);
	return x;
}

console.log(evalAndReturnX('var x = 2'));

var plusOne = new Function('n', 'return n + 1;');
console.log(plusOne(4));

//READFILE function

function readFile(name) {
	return readFile.files[name] || "";
}
readFile.files = {
	"weekDay": 'var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];\
	exports.name = function(number) { return names[number]; };\
	exports.number = function(name) { return names.indexOf(name); };',
	"today": 'exports.dayNumber = function() { return (new Date).getDay(); };'
};

function backgroundReadFile(name, c) {
	setTimeout(function() {
		c(backgroundReadFile.files[name] || "");
	}, 200 * Math.random());
}
backgroundReadFile.files = {
	"weekDay": 'define([], function() {\
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];\
	return { name: function(number) { return names[number]; }, number: function(name) { return names.indexOf(name); }};\
	});',
	"today": 'define([], function() { return {dayNumber: function() { return (new Date).getDay(); }}; });'
};

var exports = {};

// function require(name) {
// 	var code = new Function('exports', readFile(name));
// 	var exports = {};
// 	code(exports);
// 	return exports;
// }
// var weekDay = require('weekDay');
// var today = require('today');

// console.log(weekDay.name(today.dayNumber()));

function require(name) {
	if (name in require.cache) 
		return require.cache[name];

	var code = new Function('exports', 'module', readFile(name));
	var exports = {}, module = {exports: exports};
	code(exports, module);

	require.cache[name] = module.exports;
	return module.exports;
}
require.cache = Object.create(null);

var weekDay = require('weekDay');
var today = require('today');

// console.log(weekDay.name(today.dayNumber()));

//ASYNCHRONOUS
//MODULE
//DEFINITION'
var defineCache = Object.create (null);
var currentMod = null;

function getModule(name) {
	if (name in defineCache)
		return defineChache[name];

	var module = {exports: null,
					loaded: false,
					onLoad: []};
	defineCache[name] = module;
	backgroundReadFile(name, function(code) {
		currentMod = module;
		new Function('', code)();
	});

	return module;
}

function define(depNames, moduleFunction) {
	var myMod = currentMod;
	var deps = depNames.map(getModule);

	deps.forEach(function(mod) {
		if(!mod.loaded) 
			mod.onLoad.push(whenDepsLoaded);
	});

	function whenDepsLoaded() {
		if (!deps.every(function(m) { return m.loaded; }))
		return;

		var args = deps.map(function(m) { return m.exports; });
		var exports = moduleFunction.apply(null, args);
		if (myMod) {
			myMod.exports = exports;
			myMod.loaded = true;
			myMod.onLoad.forEach(function(f) { f(); });
		}
	}

	whenDepsLoaded();
}

define([], function() {
	var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return {
		name: function(number) { return names[number]; },
		number: function(name) { return names.indexOf(name); }
	};
});	

define([], function() {
	return {
		dayNumber: function() { return (new Date).getDay(); }
	};
});

// define(['weekDay', 'today'], function(weekDay, today) {
// 	console.log(weekDay.name(today.dayNumber()));
// });

//EXERCISES
var monthYear = {};
(function(exports) {
	var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
					'October', 'November', 'December'];

	exports.name = function(number) {
		return names[number];
	};

	exports.number = function(name) {
		return names.indexOf(name);
	};
})(monthYear);

console.log(monthYear.name(2));
console.log(monthYear.number('November'));

//MODULE 1
/* 
Vector
Grid
View
directions
directionNames
*/

//MODULE 2 
/*
BouncingCritter
WallFollower
Plant
PlantEater
SmartPlantEater
Tiger
*/

//MODULE 3
/*
randomElement
elementFromChar
charFromElement
dirPlus
*/

//MODULE 4
/*
World
Wall
LifelikeWorld
*/

//Move the modules.export into the cache before running the module so that the 
//default exports value doesn't change until after the modules have loaded.g




