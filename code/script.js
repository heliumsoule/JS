// alert("Hello");

function talksAbout(node, string) {
	if (node.nodeType == document.ELEMENT_NODE) {
		for (var i = 0; i < node.childNodes.length; i++) {
			if (talksAbout(node.childNodes[i], string))
				return true;
		}
		return false;
	} else if (node.nodeType == document.TEXT_NODE) {
		return node.nodeValue.indexOf(string) > -1;
	}
}

console.log(talksAbout(document.body, "book"));

var link = document.getElementsByTagName('a')[0];
console.log(link);
console.log(link.href);

// var ostrict = document.getElementById('gertrude');
// console.log(ostrict.src);
// console.log(ostrict.style);

var paragraphs = document.getElementsByTagName('p');
document.body.insertBefore(paragraphs[2], paragraphs[0]);

function replaceImages() {
	var images = document.getElementsByTagName('img');
	for (var i = images.length - 1; i >= 0; i--) {
		var image = images[i];
		if (image.alt) {
			var text = document.createTextNode(image.alt);
			image.parentNode.replaceChild(text, image);
		}
	}
}

//The funciton replaceImages() needs to start from the back because the list that is being updated is live
//so when one element is pulled out, the list size actually changes. If you start updating from the back of the collection
//you can avoid that problem.

var arrayish = {0: 'one', 1: 'two', length: 2};
var real = Array.prototype.slice.call(arrayish, 0);

function elt(type) {
	var node = document.createElement(type);
	for (var i = 1; i < arguments.length; i++) {
		var child = arguments[i];
		if (typeof child == "string")
			child = document.createTextNode(child);
		node.appendChild(child);
	}

	return node;
}

console.log(document.getElementById('quote'));
document.getElementById('quote').appendChild(
	elt('footer', '---',
		elt('strong', 'Karl Popper'),
		', preface to the second edition of ',
		elt('em', 'The Open Society and Its Enemies'),
		', 1950'));

var paras = document.body.getElementsByTagName('p');
Array.prototype.forEach.call(paras, function(para) {
	if (para.getAttribute('data-classified') == 'secret')
		para.parentNode.removeChild(para);
});

function highlightCode(node, keywords) {
	var text = node.textContent;
	node.textContent = '';

	var match, pos = 0;
	while (match = keywords.exec(text)) {
		var before = text.slice(pos, match.index);
		node.appendChild(document.createTextNode(before));
		var strong = document.createElement('strong');
		strong.appendChild(document.createTextNode(match[0]));
		node.appendChild(strong);
		pos = keywords.lastIndex;
	}

	var after = text.slice(pos);
	node.appendChild(document.createTextNode(after));
}

var languages = {
	javascript: /\b(function|return|var)\b/g 
};

function highlightAllCode() {
	var pres = document.body.getElementsByTagName('pre');
	for (var i = 0; i < pres.length; i++) {
		var pre = pres[i];
		var lang = pre.getAttribute('data-language');
		if (languages.hasOwnProperty(lang))
			highlightCode(pre, languages[lang]);
	}
}

highlightAllCode();

function time(name, action) {
	var start = Date.now();
	action();
	console.log(name, "took", Date.now() - start, "ms");
}

time("naive", function() {
	var target = document.getElementById('two');
	target.appendChild(document.createTextNode('XXXXX'));
	var total = Math.ceil(2000 / (target.offsetWidth / 5));
	for (var i = 5; i < total; i++) 
		target.appendChild(document.createTextNode('X'));
});

var para = document.getElementById('para');
console.log(para.style.color);
para.style.color = 'magenta';

function count(selector) {
	return document.querySelectorAll(selector).length;
}

console.log(count('p'));
console.log(count('.animal'));
console.log(count('p .animal'));
console.log(count('p > .animal'));

var ostrich = document.querySelector('img');
var angle = 0, lastTime = null;
function animate(time) {
	if (lastTime != null) 
		angle += (time - lastTime) * .001;
	lastTime = time;
	ostrich.style.top = (Math.sin(angle) * 20) + 'px';
	ostrich.style.left = (Math.cos(angle) * 200) + 'px';
	requestAnimationFrame(animate);
}

// requestAnimationFrame(animate);

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable(arr) {
	var body = document.getElementsByTagName('body')[0];
	var table = document.createElement('table');
	table.setAttribute('border', '2');
	var keys = Object.keys(MOUNTAINS[0]), tbdy = document.createElement('tbody'), nametr = document.createElement('tr');
	for (var i = 0; i < keys.length; i++) {
		var th = document.createElement('th');
		th.appendChild(document.createTextNode(keys[i]));
		nametr.appendChild(th);
	}
	tbdy.appendChild(nametr);
	for (var i = 0; i < keys.length; i++) {
		var tr = document.createElement('tr');
		for (var key in keys) {
			var td = document.createElement('td');
			td.appendChild(document.createTextNode(MOUNTAINS[i][keys[key]]));
			if (MOUNTAINS[i][keys[key]] % 1 === 0) {
				td.style.textAlign = 'right';
			}
			tr.appendChild(td);
			tr.setAttribute('rowSpan', '2');
		}
		tbdy.appendChild(tr);
	}
	table.appendChild(tbdy);
	body.appendChild(table);
}

buildTable(MOUNTAINS);

function getElementsByTagName(node, string) {
	c = node.childNodes;
	var output = []
	for (var i = 0; i < c.length; i++) {
		if (c[i].nodeName.toLowerCase() === string) {
			output.push(c[i]);
		}
	}
	return output;
}

console.log(getElementsByTagName(document.body, 'p'));












