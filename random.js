// 1	data = [ 2, 4, 6 ]
// 2	total = 0
// 3	average = 0
// 4	n = 0
// 5	for value in data:
// 6	    n += 1
// 7	    total += value
// 8	    average = total / n;
// 9	    print "average:", average


var data = ['1', '2', '3'];
var total = 0;
var average = 0;
var n = 0;
for (var i = 0; i < data.length; i++) {
	n += 1;
	total += data[i];
	average = total / n;
	console.log('average: ' + average);
}

x = 1.00000000000000001;
console.log(x === 1);

function f(x) {}
console.log(f());

y = {}
y[[]] = 1
console.log(Object.keys(y));

xs = ['10', '10', '10'];
console.log(xs.map(parseInt));

console.log(parseInt('200'));




