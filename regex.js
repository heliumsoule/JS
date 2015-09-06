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











