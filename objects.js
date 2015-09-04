var MOUNTAINS = [
	{name: "Kilimanjaro", height: 5895, country: "Tanzania"},
	{name: "Everest", height: 8848, country: "Nepal"},
	{name: "Mount Fuji", height: 3776, country: "Japan"},
	{name: "Mont Blanc", height: 4808, country: "Italy/France"},
	{name: "Vaalserberg", height: 323, country: "Netherlands"},
	{name: "Denali", height: 6168, country: "United States"},
	{name: "Popocatepetl", height: 5465, country: "Mexico"}
];

// if (typeof module != "undefined" && module.exports)
// 	module.exports = MOUNTAINS;

var rabbit = {};

rabbit.speak = function(line) {
	console.log("The rabbit says '" + line + "'.");
}

rabbit.speak("I am happy");

// The this keyboard
function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'.");
}

var whiteRabbit = {
	type : "white",
	speak : speak
};

var blackRabbit = {
	type : "black",
	speak : speak
};

whiteRabbit.speak("What a lovely day");
blackRabbit.speak("What a lovely day");

speak.apply(whiteRabbit, ["What is up"]);
speak.call({type : "grey"}, "What is up");

// Prototypes

var empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

var protoRabbit = {
	speak : function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'.");
	}
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("I'm okay");

function Rabbit(type) {
	this.type = type;
}

var bRabbit = new Rabbit("black");
var wRabbit = new Rabbit("white");
console.log(bRabbit.type);

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'.");
}

bRabbit.speak("How cool am I");
console.log(Object.prototype.toString == Array.prototype.toString); 
console.log([1,2].toString());
console.log(Object.prototype.toString.call([1,2]));

Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig.");
} 
bRabbit.dance();

//PROBLEMS WITH PROTOTYPES
var map = {

};

function storePhi(event, phi) {
	map[event] = phi;
}

storePhi("Pizza", 0.069);
storePhi("Touched Tree", -.081);

Object.prototype.nonsense = "Heh.";

for (var propt in map) console.log(propt);

console.log("nonsense" in map);
console.log("toString" in map);

delete Object.prototype.nonsense;
Object.defineProperty(Object.prototype, "hiddenNonsense", {
	enumerable: false, value : "Heh."
});	

for (var propt in map) console.log(propt);

console.log(map.hiddenNonsense);
console.log(map.hasOwnProperty("hiddenNonsense"));
console.log(map.hasOwnProperty("Pizza"));

var map = Object.create(null);
map["Pizza"] = .069;
console.log("toString" in map);
console.log("Pizza" in map);

// POLYMORPHISM
function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

//rows is an array containing arrays of cells. Cells are defined by their height and width. To figure out the 
//width and height corresponding to each array within rows, rowHeights and colWidths are called.

//An _ variable is one that is unncessarily in the function.

function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLines(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}

	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawLines(blocks, lineNo);
		}).join("\n");
	}

	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++) {
		result += string;
	}
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
}

var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j + i) % 2 == 0) row.push(new TextCell("##"));
		else row.push(new TextCell("  "));
	}
	rows.push(row);
}
console.log(drawTable(rows));

function UnderlinedCell(inner) {
	this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1).concat([repeat("-",width)]);
};

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			return new TextCell(String(row[name]));
		});
	});
	return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

var pile = {
	elements : ["eggshell", "orange peel", "worm"],
	get height() {
		return this.elements.length;
	},
	set height(value) {
		console.log("Ignoring attempt to set height to ", value);
	}
};

console.log(pile.height);
pile.height = 100;

Object.defineProperty(TextCell.prototype, "heightProp", {
	get : function() {
		return this.text.length;
	}
});

var cell = new TextCell("no\nway");
console.log(cell.text);
console.log(cell.heightProp);
cell.heightProp;
console.log(cell.heightProp);

// // Without a setter function, the getter function is simply ignored.

function RTextCell(text) {
	TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {

	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
};
RTextCell.prototype.constructor = RTextCell;

function dataTableTwo(data) {
	// console.log("I'm called");
	// var x = new RTextCell("Hello");
	// console.log(x.text);
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];
			if (typeof value == "number") 
				return new RTextCell(String(value));
			else 
				return new TextCell(String(value));
		});
	});
	return [headers].concat(body);
}

var rCell = new RTextCell("What is going on?");
console.log(rCell.minWidth());
console.log("What..");

//Why did you have to rename the dataTable function? Because it would call the second dataTableTwo function on the first drawTable call.
console.log(drawTable(dataTableTwo(MOUNTAINS)));
console.log(new RTextCell("A") instanceof RTextCell);
console.log(new RTextCell("A") instanceof TextCell);
console.log(new TextCell("A") instanceof RTextCell);
console.log([1] instanceof Array);

function Vector(x,y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vec) {
	return new Vector(this.x + vec.x, this.y + vec.y);
};

Vector.prototype.minus = function(vec) {
	return new Vector(this.x - vec.x, this.y - vec.y);
}
Object.defineProperty(Vector.prototype, "length", {
	get: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
})
var A = new Vector(3,4);
console.log(A.minus(new Vector(4,4)));
console.log(A.length);

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
StretchCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
StretchCell.prototype.minHeight = function() {
	return this.inner.minHeight();
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(Math.max(this.width, width), Math.max(this.height, height));
};

// function ArraySeq(input) {
// 	this.count = input.length;
// 	this.data = input;
// }
// function RangeSeq(from, to) {
// 	this.count = to - from + 1;
// 	var dat = [];
// 	for(var i = 0; i < this.count; i++) 
// 		dat.push(from + i);
// 	this.data = dat;

// }
// function logFive(obj) {
// 	var c = Math.min(5, obj.count);
// 	for(var i = 0; i < c; i++) console.log(obj.data[i]);
// }

// logFive(new ArraySeq([1,2]));
// console.log(" ");
// logFive(new RangeSeq(2,10));

//SECOND APPROACH
function logFive(sequence) {
	for(var i = 0; i < 5; i++) {
		if (!sequence.next())
			break;
		console.log(sequence.current());
	}
}
function ArraySeq(array) {
	this.pos = -1;
	this.array = array;
}
ArraySeq.prototype.next = function() {
	if (this.pos >= this.array.length - 1) {
		return false;
	}
	this.pos++;
	return true;
};
ArraySeq.prototype.current = function() {
	return this.array[this.pos];
};

function RangeSeq(from, to) {
	this.pos = from - 1;
	this.to = to;
}
RangeSeq.prototype.next = function() {
	if (this.pos >= this.to) {
		return false;
	}
	this.pos++;
	return true;
};
RangeSeq.prototype.current = function() {
	return this.pos;
};

logFive(new ArraySeq([1,2]));
console.log(" ");
logFive(new RangeSeq(2,10));







