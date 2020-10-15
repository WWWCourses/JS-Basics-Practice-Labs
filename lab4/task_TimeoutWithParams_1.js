// Task: make it work as expected
// let greet =  function (name) {
// 	console.log(`Hello, ${name}`);
// }

// Solution 1
let greet = function (name) {

	return function () {
		console.log(`Hello, ${name}`);
	}

}

// just for explanation:
// function setTimeout(func, time) {
// 	console.log(`time: ${time}`);
// 	func();
// }

setTimeout( greet('Maria'), 1000 );
setTimeout( greet('Pesho'), 2000 );



