// wait 1sec: Hello Maria
// wait 1sec: Hello Pesho
let greet = function (name) {
	console.log(`Hello ${name}`);
};
function sum(x,y) {
	console.log(x+y);
}

//setTimeout(function, milliseconds[, arg1, arg2, ...])
// setTimeout(greet, 2000, 'Maria');
// setTimeout(greet, 4000, 'Pesho');

// after 1000 ms
// sum(2,3);// 5
// setTimeout(sum, 2000, 2,3);
// after 2000 ms
// setTimeout(sum, 3000, 4,3);
setInterval(sum, 1000, 4,3);

