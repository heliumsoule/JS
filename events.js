// addEventListener('click', function() {
// 	console.log('You clicked');
// });

var a = document.getElementsByTagName('button')[0];
a.addEventListener('click', function() {
	a.log('button clicked');
});

//One time button
var b = document.getElementsByTagName('button')[1];
b.addEventListener('click', once);
function once() {
	console.log('Done.');
	b.removeEventListener('click', once);
}

var c = document.getElementsByTagName('button')[2];
c.addEventListener('mousedown', function(event) {
	if (event.which == 1)
		console.log('Left button');
	else if (event.which == 2) 
		console.log('Middle button');
	else if (event.which == 3)
		console.log('Right button');
});

//Handler Propagation
var para = document.getElementsByTagName('p')[2];
var button = document.getElementsByTagName('button')[3];
para.addEventListener('mousedown', function() {
	console.log('Handler for paragraph.');
});
button.addEventListener('mousedown', function(event) {
	console.log('Handler for button.');
	if (event.which == 3)
		event.stopPropagation();
});

document.body.addEventListener('click', function(event) {
	if (event.target.nodeName == 'BUTTON') 
		console.log('Clicked', event.target.textContent);
});

//Prevent default actions

var link = document.querySelector('a');
link.addEventListener('click', function(event) {
	console.log('Nope');
	event.preventDefault();
});

addEventListener('keydown', function(event) {
	if (event.keyCode == 86) {
		document.body.style.background = 'violet';
		console.log('test');
	}
});
addEventListener('keyup', function(event) {
	if (event.keyCode == 86)
		document.body.style.background = '';
});

console.log('V'.charCodeAt(0));
console.log('1'.charCodeAt(0));

addEventListener('keydown', function(event) {
	if (event.keyCode == 32 && event.ctrlKey) 
		console.log('Continuing');
});

addEventListener('keypress', function(event) {
	console.log(String.fromCharCode(event.charCode));
});

addEventListener('click', function(event) {
	var dot = document.createElement('div');
	dot.className = 'dot';
	dot.style.left = (event.pageX - 4) + 'px';
	dot.style.top = (event.pageY - 4) + 'px';
	document.body.appendChild(dot);
});


























