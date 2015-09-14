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
	for (var i = 0; i < images.length; i++) {
		var image = images[i];
		if (image.alt) {
			var text = document.createTextNode(image.alt);
			image.parentNode.replaceChild(text, image);
		}
	}
}






