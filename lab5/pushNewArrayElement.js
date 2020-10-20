// get elements objects:
let btnOk = document.querySelector('#btnOk');
let btnShow = document.querySelector('#btnShow');
let numberInput = document.querySelector('[type="number"]');

let arr = [];

btnOk.addEventListener('click', function () {
	let number = numberInput.value;

	arr.push(number);
	console.log(arr );
} )

btnShow.addEventListener('click', function () {
	// console.log( arr );
})

console.dir(numberInput);