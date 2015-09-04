function forEach(arr, action) {
	for (var i = 0; i < arr.length; i++) {
		action(arr[i]);
	}
}

// forEach([1,2,3,4,5], console.log);

var numbers = [1,2,3,4,5], sum = 0
forEach(numbers, function(number) {
	sum += number;
});
// console.log(sum);

//Different forEach function. Double check gatherCorrelations(journal) function in previous JS file
//Higher Order Functions

//FUNCTIONS THAT RETURN FUNCTIONS
function greaterThan(n) {
	return function(m) {return m > n};
}

var greaterThanTen = greaterThan(10);
console.log(greaterThanTen(11));

//FUNCTIONS THAT CHANGE FUNCTIONS
function noisy(f) {
	return function(arg) {
		console.log("Calling with", arg);
		var evaluate = f(arg);
		console.log("Called with", arg, "received", evaluate);
		return evaluate;
	};
}
// console.log(noisy(Booelan)(0));
// console.log(noisy(Boolean)(1));

//FUNCTIONS IN CONTROL FLOW
function unless(test, then) {
	if (!test) then();
}

function repeat(times, body) {
	for (var i = 0; i < times; i++) body(i);
}

repeat(10, function(n) {
	unless(n % 2, function() {
		console.log(n, "is even");
	});
});

function transparentWrap(f) {
	return function() {
		return f.apply(null, arguments);
	};
}

//JavaScript Object Notation JSON
// 0. Data storage and communication format on the Web.
// 1. Properties are denoted in double quotes.
// 2. Only simple data expressions, no function calls, variables, or computational values are permitted.
// 3. Comments are not allowed.

var data = JSON.stringify({name: "X", born: 1980});
console.log(data);
console.log(JSON.parse(data).born);

var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

function filter(array, test) {
	var filtered = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i])) filtered.push(array[i]);
	}
	return filtered;
}

console.log(filter(ancestry, function(person) {
	return person.born > 1900 && person.born < 1925;
}));


console.log(ancestry.filter(function(person) {
	return person.father == "Carel Haverbeke";
}));

function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
	return person.name;
}));

function reduce(array, combine, start) {
	var current = start;
	for (var i = 0; i < array.length; i++)
		current += combine(array[i], start);
	return current;
}

console.log(reduce([1,2,3,4], function(a,b) {
	return a + b;
}, 0));

console.log(ancestry.reduce(function(min,cur) {
	if (cur.born < min.born) return cur;
	else return min;
}));

function average(array) {
	function plus(a,b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

function reduceAncestors(person, f, defaultValue) {
	function valueFor(person) {
		if (person == null) 
			return defaultValue;
		else 
			return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
	}
	return valueFor(person);
}

function shareDNA(person, fromMother, fromFather) {
	if (person.name == "Pauwels van Haverbeke") 
		return 1;
	else 
		return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, shareDNA, 0) / 4);

function countAncestors(person, test) {
	function combine(current, fromMother, fromFather) {
		var thisOneCounts = current != person && test(current);
		return fromMother + fromFather + (thisOneCounts ? 1 : 0);
	}
	return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person) {
	var all = countAncestors(person, function(person) {
		return true;
	});
	var longLiving = countAncestors(person, function(person) {
		return (person.died - person.born) >= 70;
	});
	return longLiving / all;
}

console.log(longLivingPercentage(byName["Emile Haverbeke"]));

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person) {
	return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
	return isInSet(theSet, person);
}));

//SAME EFFECT DEMONSTRATING BIND. 
console.log(ancestry.filter(isInSet.bind(null, theSet)));

//EXERCISES 

var Test = [[1,2,3],["a","b","c"],[5,6]];
console.log(Test.reduce(function(prev, curr) {
	return prev.concat(curr);
}))

function diffParental(person) {
	if (byName[person.mother] != null) return person.born - byName[person.mother].born;
	else return 0;
}

function nonZero(person) {
	return person != 0;
}

console.log(ancestry.map(diffParental).filter(nonZero));
console.log(average(ancestry.map(diffParental).filter(nonZero)));

function century(person) {
	return Math.ceil(person.died / 100);
}

function groupBy(arr, grouping) {
	var groupings = {

	};
	for (var item in arr) {
		var group = grouping(arr[item]);
		console.log(group);
		if (groupings[group] == undefined) groupings[group] = [arr[item]];
		else groupings[group].push(arr[item]);		
	}
	return groupings
}

var output = groupBy(ancestry, century);

console.log(groupBy(ancestry, century));
for (var propt in output) {
	var ages = output[propt].map(function(person) {
		return person.died - person.born;
	})
	console.log("The average age in the " + propt + " century is " + average(ages));
}

function every(arr, f) {
	for (var propt in arr) {
		if (!(f(arr[propt])))
			return false;
	}
	return true;
}

function some(arr, f) {
	return !every(arr, f);
}

console.log(every([1,2,3,4], function(item) {
	return item > 2;
}));

console.log(some([1,2,3,4], function(item) {
	return item > 2;
}));





