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