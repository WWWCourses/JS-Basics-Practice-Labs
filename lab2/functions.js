console.log(x); // undefined
console.log(y); // undefined
var x;
var y = 4;
console.log(y);

function add(a,b) {
	console.log(`1`);
	return a+b;
}
console.log( add() );

console.log(a);

// // CONSOLE
// undefined 					// console.log(x)
// undefined 					// console.log(y)
// 4  							// console.log(y);
// 1							// console.log(`1`);
// NaN							// console.log( add() );
// // Error         			// console.log(a);


// error: a is not defined
