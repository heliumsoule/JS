// var ten = 10;
// console.log(ten * ten);

// var mood = "light";
// console.log(mood);

// mood = "dark";
// console.log(mood);

// console.log(Number("15") + 10);
// console.log("15" + String(10));

// console.log(isNaN(10));
// console.log(isNaN("10"));
//Both statements evaluate to true

// var count = 0;
// while (count <= 12) {
// 	console.log(count);
// 	count += 2;
// }

// for(var i = 0; i <= 12; i += 2) {
// 	console.log(i);
// }

// var result = 1;
// var counter = 0;
// while (counter < 10) {
// 	result *= 2;
// 	counter += 1;
// }
// console.log(result);

var result = 1;
for(var j = 0; j < 10; j += 1) {
	result *= 2;
} 
console.log(result);

// do {
// 	//Statement
// } while (//Boolean)

for(var current = 20; ; current += 1) {
	if (current % 11 == 0) {
		break;
	}
}

console.log(current);

var value = "rainy";
switch (value) {
	case "rainy" :
		console.log("Remember to bring an umbrella");
		break;
	case "sunny" :
		console.log("Dress lightly.");
	case "cloudy" :
		console.log("Go outside");
		break;
	default :
		console.log("Unknown weather conditions");
		break;
}

//Exercises
// var str = "#";
// for(var k = 0; k < 7; k++) {
// 	console.log(str);
// 	str += "#";
// }

// for(var p = 1; p < 101; p++) {
// 	if (p % 3 == 0 && p % 5 == 0) console.log("FizzBuzz");
// 	else if (p % 3 == 0) console.log("Fizz");
// 	else if (p % 5 == 0) console.log("Buzz");
// 	else console.log(p);
// }

var width = 7, height = 6, output = "", switched = 0;
for(var i = 1; i <= height + 1; i++) {
	switched = (i + 1) % 2;
	for(var j = 1; j <= width + 1; j++) {
		if (switched == 1) output += "#";
		else output += " ";
		switched = (switched + 1) % 2;
	}
	output += "\n";
}
console.log(output);







