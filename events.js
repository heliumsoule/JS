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

var funBox = document.getElementsByClassName('funBox')[0];
funBox.addEventListener('click', function(event) {
	var dot = document.createElement('div');
	dot.className = 'dot';
	dot.style.left = (event.pageX - 4) + 'px';
	dot.style.top = (event.pageY - 4) + 'px';
	document.body.appendChild(dot);
});

var lastX;
var rect = document.getElementsByTagName('div')[1];
rect.addEventListener('mousedown', function(event) {
	if (event.which == 1) {
		lastX = event.pageX;
		addEventListener('mousemove', moved);
		event.preventDefault(); // Prevent selection
	}
});

function buttonPressed(event) {
	if (event.buttons == null)
		return event.which != 0;
	else 
		return event.buttons != 0;
}

function moved(event) {
	if (!buttonPressed(event)) {
		removeEventListener('mousemove', moved); 
	} else {
		var dist = event.pageX - lastX ;
		var newWidth = Math.max(10,rect.offsetWidth + dist);
		rect.style.width = newWidth + "px";
		lastX = event.pageX;
	}
}

var para = document.getElementsByTagName('p')[7];
function isInside(node, target) {
	for (; node != null; node = node.parentNode) {
		if (node == target) return true;
	}
}
para.addEventListener('mouseover', function(event) {
	if (!isInside(event.relatedTarget, para))
		para.style.color = 'red';
});
para.addEventListener('mouseout', function(event) {
	if (!isInside(event.relatedTarget, para))
		para.style.color = '';
});

var bar = document.querySelector('.progress div');
addEventListener('scroll', function() {
	var max = document.body.scrollHeight - innerHeight;
	var percent = (pageYOffset / max) * 100;
	bar.style.width = percent + '%';
});

var help = document.querySelectorAll('#help')[0];
var fields = document.querySelectorAll('input');
for (var i = 0; i < fields.length; i++) {
	fields[i].addEventListener('focus', function(event) {
		var text = event.target.getAttribute('data-help');
		help.textContent = text;
	});
	fields[i].addEventListener('blur', function(event) {
		help.textContent = '';
	});
}

// var squareWorker = new Worker('squareWorker.js');
// squareWorker.addEventListener('message', function(event) {
// 	console.log('The worker responded:', event.data);
// });

// squareWorker.postMessage(10);
// squareWorker.postMessage(24);

// document.body.style.background = 'blue';
// setTimeout(function() {
// 	document.body.style.background = 'yellow';
// }, 2000);

var bombTimer = setTimeout(function() {
	console.log('BOOM');
}, 500);

if (Math.random() < 0.5) {
	console.log('Defused');
	clearTimeout(bombTimer);
}

// var ticks = 0;
// var clock = setInterval(function() {
// 	console.log('tick', ticks++);
// 	if (ticks == 10) {
// 		clearInterval(clock);
// 		console.log('Stop');
// 	}
// }, 2000);

var textarea = document.querySelectorAll('textarea')[0];
var timeout;
textarea.addEventListener('keydown', function() {
	clearTimeout(timeout);
	timeout = setTimeout(function() {
		console.log('You stopped typing');
	}, 500);
});

function displayCoords(event) {
	var div = document.querySelector('.mousePos');
	div.textContent = 'Mouse at ' + event.pageX + ', ' + event.pageY;
}

var div = document.querySelector('.mousePos');
console.log(div);
var scheduled = false, lastEvent;
addEventListener('mousemove', function(event) {
	lastEvent = event;
	if (!scheduled) {
		scheduled = true;
		setTimeout(function() {
			scheduled = false;
			displayCoords(event);
		}, 250);
	}
});







