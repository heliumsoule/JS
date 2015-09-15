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

var ostrict = document.getElementById('gertrude');
console.log(ostrict.src);
console.log(ostrict.style);

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






