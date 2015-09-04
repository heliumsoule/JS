function fac(n) {
	if (n == 0) 
		return 1;
	else 
		return fac(n - 1) * n;
}

// console.log((144 - (144 % 10)) / 10);

// var str = "This is the first line\nAnd this is the second."
// console.log("A newline character \"\\n\".");

// console.log(typeof Infinity);
// console.log(Infinity == Infinity);

console.log(Math.random() > .5 ? 1 : -1);
//Ternary operator
console.log("Karl" || "User");
//Kark is returned because in an or statement, if the first parameter evaluates to true, it is returned.
console.log(null || "User");
//Similarly, if the first parameter evaluates to false, the second parameter is returned.
console.log(null || undefined);
//The opposite is true for an && statement.