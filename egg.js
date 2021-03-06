// do(define(x, 10),
// 	if(>(x,5),
// 		print('Whoa'),
// 		print('Whatever')))

// {
// 	type: 'apply',
// 	operator: {type: 'word', name: '>'},
// 	args : [
// 		{type: 'word', name: 'x'},
// 		{type: 'value', name: 5}
// 	]
// }

function parseExpression(program) {
	program = skipSpace(program);
	var match, expr;
	if (match = /^'([^']*)'/.exec(program)) //STRINGS
		expr = {type: 'value', value: match[1]};
	else if (match = /^\d+\b/.exec(program)) //NUMBERS
		expr = {type: 'value', value: Number(match[0])};
	else if (match = /^[^\s(),']+/.exec(program)) //WORDS
		expr = {type: 'word', name: match[0]};
	else
		throw new SyntaxError('Unexpected syntax: ' + program);
	return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
	var first = string.match(/^(\s|#.*)*/);
	return string.slice(first[0].length);
}	

function parseApply(expr, program) {
	program = skipSpace(program);
	if (program[0] != '(') {
		return {expr: expr, rest: program};
	}
	program = skipSpace(program.slice(1));
	expr = {type: 'apply', operator: expr, args: []};
	while (program[0] != ')') {
		var arg = parseExpression(program);
		expr.args.push(arg.expr);
		program = skipSpace(arg.rest);
		if (program[0] == ',')
			program = skipSpace(program.slice(1));
		else if (program[0] != ')')
			throw new SyntaxError("Expected ',' or ')'");
	}
	return parseApply(expr, program.slice(1));
}

function parse(program) {
	var result = parseExpression(program);
	if (skipSpace(result.rest).length > 0) 
		throw new SyntaxError('Unexpected text after program');
	return result.expr;
}

// console.log(parse('+(a, 10)'));

function evaluate(expr, env) {
	// console.log(expr);
	// console.log('Iteration');
	switch(expr.type) {
		case 'value':
			return expr.value;
		case 'word':
			if (expr.name in env) 
				return env[expr.name];
			else
				throw new ReferenceError('Undefined variable: ' + expr.name);
		case 'apply': 
			if (expr.operator.type == 'word' &&
				expr.operator.name in specialForms)
				return specialForms[expr.operator.name](expr.args, env);
			// console.log('EVER HERE');
			var op = evaluate(expr.operator, env);
			if (typeof op != 'function')
				throw new TypeError('Applying a non-function');
			return op.apply(null, expr.args.map(function(arg) {
				return evaluate(arg, env);
			}));
	}
}

var specialForms = Object.create(null);

specialForms['if'] = function(args, env) {
	if (args.length != 3) 
		throw new SyntaxError('Wrong number of args to if');

	if (evaluate(args[0], env) !== false)
		return evaluate(args[1], env);
	else
		return evaluate(args[2], env);

};

specialForms['while'] = function(args, env) {
	if (args.length != 2) 
		throw new SyntaxError('Wrong number of args to while');

	while (evaluate(args[0], env) !== false)
		evaluate(args[1], env);
	return false;
};

specialForms['do'] = function(args, env) {
	var value = false;
	args.forEach(function(arg) {
		value = evaluate(arg, env);
	});
	return value;
};

specialForms['define'] = function(args, env) {
	if (args.length != 2 || args[0].type != 'word')
		throw new SyntaxError('Wrong use of define');
	var value = evaluate(args[1], env);
	env[args[0].name] = value;
	return value;
};

var topEnv = Object.create(null);
topEnv['true'] = true;
topEnv['false'] = false;

// var prog = parse('if(true, false, true)');
// console.log(evaluate(prog, topEnv));

['+', '-', '*', '/', '==', '<', '>'].forEach(function(op) {
	topEnv[op] = new Function('a', 'b', 'return a ' + op + 'b;');
});

console.log(topEnv['+'](3,4));
console.log(topEnv['*'](3,4));

topEnv['print'] = function(value) {
	console.log(value);
	return value;
};

topEnv['array'] = function() {
	return Array.prototype.slice.call(arguments, 0);
};

topEnv['length'] = function(array) {
	return array.length;
};

topEnv['element'] = function(array, index) {
	return array[index];
};

function run() {
	var env = Object.create(topEnv);
	console.log('What are the arguments', arguments);
	var program = Array.prototype.slice.call(arguments, 0).join('\n');
	console.log('What is the program');
	console.log(program);
	console.log('What is the environment');
	console.log(env);
	return evaluate(parse(program), env);
}

run("do(define(total, 0),",
	"	define(count, 1),",
	"	while(<(count, 11),",
	"		do(define(total, +(total, count)),",
	"			define(count, +(count, 1)))),",
	"	print(total))");

specialForms['fun'] = function(args, env) {
	if (!args.length) 
		throw new SyntaxError('Functions need a body');
	function name(expr) {
		if (expr.type != 'word')
			throw new SyntaxError('Arg names must be words');
		return expr.name;
	}
	var argNames = args.slice(0, args.length - 1).map(name);
	var body = args[args.length - 1];
	return function() {
		if (arguments.length != argNames.length) 
			throw new TypeError('Wrong number of arguments');
		var localEnv = Object.create(env);
		for (var i = 0; i < arguments.length; i++) 
			localEnv[argNames[i]] = arguments[i];
		return evaluate(body, localEnv);
	};
};

run("do(define(plusOne, fun(a, +(a, 1))),",
	"	print(plusOne(10)))");

run("do(define(pow, fun(base, exp,",
	"		if(==(exp, 0),", 
	"			1,",
	"			*(base, pow(base, -(exp, 1)))))),",
	"	print(pow(2, 10)))");

//Strange behavior in JavaScript
//The int runningAvg is converted to a string, and then converted
//back to an int
var data = ["1", "2", "3"];
var runningAvg = 0;

for (var i = 0; i < data.length; i++) {
	runningAvg += data[i];
	console.log(runningAvg / (i + 1));
}

run("do(define(f, fun(a, fun(b, +(a, b)))),",
	"	print(f(4)(5)))");

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}











