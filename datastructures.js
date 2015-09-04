// var Celine = "Celine";
// console.log(typeof Celine.toUpperCase);

// console.log(Celine.toUpperCase());

// var join = [];
// join.push("A");
// join.push("B");
// join.push("C");
// console.log(join);
// console.log(join.join("_ "));

// console.log(join.pop());
// console.log(join);

// var direction = {
// 	left : 1,
// 	right : 2
// };

// console.log(direction.left);
// delete direction.left;
// console.log(direction.left);
// console.log("left" in direction);
// console.log("right" in direction);

var journal = [
	{"events":["carrot","exercise","weekend"],"squirrel":false},
	{"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
	{"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
	{"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
	{"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
	{"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
	{"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
	{"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
	{"events":["cauliflower","brushed teeth","work"],"squirrel":false},
	{"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
	{"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
	{"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
	{"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
	{"events":["spaghetti","brushed teeth","work"],"squirrel":false},
	{"events":["brushed teeth","computer","work"],"squirrel":false},
	{"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
	{"events":["carrot","brushed teeth","running","work"],"squirrel":false},
	{"events":["brushed teeth","work"],"squirrel":false},
	{"events":["cauliflower","reading","weekend"],"squirrel":false},
	{"events":["bread","brushed teeth","weekend"],"squirrel":false},
	{"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
	{"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
	{"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
	{"events":["spaghetti","nachos","work"],"squirrel":false},
	{"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
	{"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
	{"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
	{"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
	{"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
	{"events":["potatoes","exercise","work"],"squirrel":false},
	{"events":["pizza","ice cream","computer","work"],"squirrel":false},
	{"events":["lasagna","ice cream","work"],"squirrel":false},
	{"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
	{"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
	{"events":["potatoes","brushed teeth","work"],"squirrel":false},
	{"events":["carrot","work"],"squirrel":false},
	{"events":["pizza","beer","work","dentist"],"squirrel":false},
	{"events":["lasagna","pudding","cycling","work"],"squirrel":false},
	{"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
	{"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
	{"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
	{"events":["lasagna","peanuts","work"],"squirrel":true},
	{"events":["pizza","work"],"squirrel":false},
	{"events":["potatoes","exercise","work"],"squirrel":false},
	{"events":["brushed teeth","exercise","work"],"squirrel":false},
	{"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
	{"events":["pizza","cycling","weekend"],"squirrel":false},
	{"events":["carrot","brushed teeth","weekend"],"squirrel":false},
	{"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
	{"events":["pizza","peanuts","candy","work"],"squirrel":true},
	{"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
	{"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
	{"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
	{"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
	{"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
	{"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
	{"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
	{"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
	{"events":["bread","candy","work"],"squirrel":false},
	{"events":["potatoes","nachos","work"],"squirrel":false},
	{"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
	{"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
	{"events":["brussel sprouts","running","work"],"squirrel":false},
	{"events":["brushed teeth","work"],"squirrel":false},
	{"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
	{"events":["candy","brushed teeth","work"],"squirrel":false},
	{"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
	{"events":["bread","brushed teeth","weekend"],"squirrel":false},
	{"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
	{"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
	{"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
	{"events":["lettuce","brushed teeth","work"],"squirrel":false},
	{"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
	{"events":["pizza","brushed teeth","work"],"squirrel":false},
	{"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
	{"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
	{"events":["brushed teeth","running","work"],"squirrel":false},
	{"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
	{"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
	{"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
	{"events":["carrot","brushed teeth","running","work"],"squirrel":false},
	{"events":["carrot","reading","weekend"],"squirrel":false},
	{"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
	{"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
	{"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
	{"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
	{"events":["pizza","brushed teeth","running","work"],"squirrel":false},
	{"events":["lettuce","brushed teeth","work"],"squirrel":false},
	{"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
	{"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function addEntry(events, didITurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didITurnIntoASquirrel
	});
}

// addEntry (["work", "touched tree", "pizza", "running", "television"], false);
// addEntry (["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
// addEntry (["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) / 
		Math.sqrt((table[2] + table[3]) * 
				  (table[0] + table[1]) * 
				  (table[1] + table[3]) * 
				  (table[0] + table[2]));
}

// console.log(phi([76,9,4,1]));


function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
	var table = [0, 0, 0, 0];
	for(var count = 0; count < journal.length; count++) {
		var entry = journal[count], index = 0;
		if (hasEvent(event, entry)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}

// console.log(tableFor("pizza", journal));

// var map = {}
// function storePhi(event, phi) {
// 	map[event] = phi;
// }

// storePhi("pizza", 0.069);
// storePhi("touched tree", -.081);

// for (var event in map) 
// 	console.log("The correlation for '" + event + "' is " + map[event]);

// function gatherCorrelation(journal) {
// 	var phis = {};
// 	for(var entry = 0; entry < journal.length; entry++) {
// 		var events = journal[entry].events;
// 		for(var i = 0; i < events.length; i++) {
// 			var event = events[i];
// 			if (!(event in phis)) 
// 				phis[event] = phi(tableFor(event, journal));
// 		}
// 	}
// 	return phis;
// }

// function forEach(array, action) {
// 	for (var i = 0; i < array.length; i++) {
// 		action(array[i]);
// 	}
// }

function gatherCorrelation(journal) {
	var phis = {};
	journal.forEach(function(entry) {
		entry.events.forEach(function(event) {
			if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
		});
	});
	return phis;
}


var correlations = gatherCorrelation(journal);
for (var event in correlations) {
	var correlation = correlations[event];
	if (correlation > .1 || correlation < -.1) console.log("The correlation for '" + event + "' is " + correlations[event]);
}

for (var i = 0; i < journal.length; i++) {
	var entry = journal[i];
	if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
		entry.events.push("peanut teeth");
}

// console.log(phi(tableFor("peanut teeth", journal)));

var todoList = [];

function rememberTo(task) {
	todoList.push(task);
}

function whatIsNext() {
	return todoList.shift();
}

function urgentlyRememberTo(task) {
	todoList.unshift(task);
}

// console.log([1,2,3,2,2,1].indexOf(2));
// console.log([1,2,3,2,2,1].indexOf(2,2));
// console.log([1,2,3,2,2,1].lastIndexOf(2));

// console.log([1,2,3,4,5].slice(1));
// console.log([1,2,3,4,5].slice(1,3));

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

// console.log(remove([1,2,3,4,5], 10));

//It is impossible to create new properties on the IMMUTABLE types, String, Boolean, Number.
var stri = "Fido";
stri.randomProperty = "value";
// console.log(stri.randomProperty);
// console.log("     okay \n".trim());

function argumentCounter() {
	console.log("Input " + arguments.length + " arguments");
}

// argumentCounter(1,2);

//The Global Object
// var Ex = 10;
// console.log("Ex" in window);
// console.log(window.Ex);

function range(start, end, step) {
	if (step == null) {
		output = [];
		while (start != (end + 1)) {
			output.push(start++);
		}
		return output;
	} else if ((start - end) * step < 0) {
		output = []
		while ((start - end) * step < 0) {
			output.push(start);
			start += step;
		}
		return output;
	}
}

function sum(arr) {
	var tot = 0;
	for (var i = 0; i < arr.length; i++) {
		tot += arr[i];
	}
	return tot
}

// console.log(sum(range(1,10)));
// console.log(range(10,1,-2));

function reverseArray(arr) {
	var output = [];
	for (var i = arr.length - 1; i > -1; i--) {
		output.push(arr[i]);
	}
	return output;
}

function reverseArrayInPlace(arr) {
	var count;
	for (var i = 0; i < (arr.length - 1) / 2; i++) {
		count = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = count;
	}
	return arr;
}

// console.log(reverseArrayInPlace([1,2,3,4,5]));

//A list is a nested set of objects
var l = {
	value : 1,
	rest : {
		value : 2,
		rest : {
			value : 3,
			rest : null
		}
	}
};

function prepend(element, l) {
	var output = {
		value : element,
		rest : l
	};
	return output;
}

function arrayToList(arr) {
	var curr = null;
	while (arr.length > 0) {
		curr = prepend(arr.pop(), curr);
	}
	return curr;
}

// console.log(arrayToList([1,2,3]));

function nth(l,n) {
	var count = 0, output = 0;
	while (count != n || l.rest != null) {
		l = l.rest;
		count++;
	}
	return l.value;
}

function nthrec(l,n) {
	if (n == 0) return l.value;
	else if (l.rest == null) return undefined;
	else return nthrec(l.rest, n-1);
}

function listToArray(l) {
	var arr = []
	while (l.rest != null) {
		arr.push(l.value);
		l = l.rest;
	}
	arr.push(l.value);
	return arr;
}

// console.log(listToArray(arrayToList([1,2,3,4])));

function deepEqual(objone, objtwo) {
	if (typeof objone == typeof objtwo) {
		if (typeof objone != "object") {
			return objone == objtwo;
		}
		else if (objone != null) {
			for (var property in objone) {
				if (!deepEqual(objone[property], objtwo[property])) {
					return false;
				}
			}
			return true;
		}
		else {
			return false;
		}
	} else {
		return false;
	}	
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
console.log(Object.keys(obj));

// forEach([1,2,3,4],console.log);
function logArrayElements(element, index) {
  console.log('a[' + index + '] = ' + element);
}
[1,2,3,4].forEach(logArrayElements);




