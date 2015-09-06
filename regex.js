var re1 = new RegExp('abc');
var re2 = /abc/;

var eighteenPlus = /eighteen\+/;

console.log(/abc/.test('abcde'));
console.log(/abc/.test('abxde'));

console.log(/[0123456789]/.test('in 1992'));
console.log(/[0-9]/.test('in 1992'));

// \d Any digit character
// \w An alphanumeric character (“word character”)
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// . Any character except for newline

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("09-05-2015 21:33"));
console.log(dateTime.test("Sept-05-2015 21:33"));

var notBinary = /[^01]/;
console.log(notBinary.test('10101201010024002020000'));
console.log(notBinary.test('10101010101000001011'));

// + allows for >= 1 matching of the RegExp pattern. * allows for >= 0.
console.log(/\d+/.test('123'));
console.log(/\d+/.test(''));
console.log(/\d*/.test(''));
console.log(/\d*/.test('123'));

var neighbor = /neighbou?r/;
console.log(neighbor.test('neighbor'));
console.log(neighbor.test('neighbour'));

//Range specification {LOWER, UPPOER}. You can leave out either the lower or the upper.
var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(dateTime.test('09-05-2015 21:33'));

//i creates insensitivity
//Parentheses are useful when you want to apply an operation to an entire group.
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test('BOOOOOOHOOHOO'));

var match = /\d+/.exec('one two 100');
console.log(match);

//String match function
console.log('one two 100'.match(/\d+/));
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("She said 'hello'"));

//When a group isn't matched, the output is undefined.
console.log(/bad(ly)?/.exec('bad'));
console.log(/(\d)+/.exec('123'));

//DATES AND TIMES
console.log(new Date());

//What is weird about this picture?
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387429200000));

function findDate(string) {
	var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
	var match = dateTime.exec(string);
	return new Date(Number(match[3]),
					Number(match[2]) - 1, //Why is there a -1
					Number(match[1]));
}

console.log(findDate('30-1-2003'));
console.log(findDate('100-1-30000'));
//To prevent the above from happening, use the caret to match the start of the input and 
//$ to match the end of the input.

console.log(/cat/.test('concatenate'));
console.log(/\bcat\b/.test('concatenate'));

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test('15 pigs'));
console.log(animalCount.test('15 pigchickens'));

console.log('papa'.replace('p','m'));
console.log('Borobudur'.replace(/[ou]/,'a'));
console.log('Borobudur'.replace(/[ou]/g,'a'));

console.log(
	'Hopper, Grace\nMcCarthy, John\nRitchie, Dennis'
	.replace(/([\w ]+), ([\w ]+)/g, '$2 $1'));

var s = 'the cia and the fbi';
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
	return str.toUpperCase();
}));

var stock = '1 lemon, 2 cabbages, and 101 eggs';
function minusOne(match, amount, unit) {
	amount = Number(amount) - 1;
	if (amount == 1) 
		unit = unit.slice(0, unit.length - 1);
	else if (amount == 0)
		amount = 'no';
	return amount + ' ' + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
}
console.log(stripComments('1 + /* 2 */3'));
console.log(stripComments('x = 10; // ten!'));
console.log(stripComments('1 /* a */+/* b */ 1'));
//+, *, ? and {} are greedy operators.
function stripCommentsTwo(code) {
	return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}
console.log(stripCommentsTwo('1 /* a */+/* b */ 1'));

var name = 'harry';
var text = 'Harry is a suspicious charater.';
var regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
//gi - global and case insensitive
console.log(text.replace(regexp, '_$1_'));

var name = 'dea+hl[]rd';
var text = 'This dea+hl[]rd guy is super annoying.';
var escaped = name.replace(/[^\w\s]/g, '\\');
console.log(escaped);
var escaped = name.replace(/[^\w\s]/g, '\\$');
console.log(escaped);
var escaped = name.replace(/[^\w\s]/g, '\\$&');
console.log(escaped);
var regexp = new RegExp('\\b(' + escaped + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_'));

//SEARCH
console.log('   word'.search(/\S/));
console.log('       '.search(/\S/));
var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec('xyzzy');
console.log(match.index);
console.log(pattern.lastIndex);

//PROBLEMS WITH GLOBAL INDEXING
var digit = /\d/g;
console.log(digit.exec('here it is: 1'));
console.log(digit.exec('and now: 1'));
console.log('Banana'.match(/an/g));

var input = 'A string with 3 numbers in it... 42 and 88.';
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
	console.log('Found', match[1], 'at', match.index);












