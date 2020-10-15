// synchronous call
// alert(1);
// console.log(`After 1`);
// alert(2);
// console.log(`After 2`);

// asynchronous call:
setTimeout( function () {
	console.log(1);
}, 1000);
console.log(`After 1`);

setTimeout( function () {
	console.log(2);
}, 2000);
console.log(`After 2`);