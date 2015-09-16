// addEventListener('click', function() {
// 	console.log('You clicked');
// });

// var button = document.querySelector('button');
// button.addEventListener('click', function() {
// 	console.log('button clicked');
// });

//One time button
// var button = document.querySelector('button');
// button.addEventListener('click', once);
// function once() {
// 	console.log('Done.');
// 	button.removeEventListener('click', once);
// }

var button = document.querySelector('button');
button.addEventListener('mousedown', function(event) {
	console.log(event);
	if (event.which == 1)
		console.log('Left button');
	else if (event.which == 2) 
		console.log('Middle button');
	else if (event.which == 3)
		console.log('Right button');
});











