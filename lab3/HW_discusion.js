// var fruitsData = [
//     ["apple", "orange", "cherry"],
//     [1.2, 2.0, 3.5]
// ];

// let rows = fruitsData.length;
// let  cols= fruitsData[0].length;
// // console.log(rows, cols);

// for(let j=0; j<cols; j++){
// 	let output = '';
// 	for(let i=0; i<rows; i++){
// 		output += fruitsData[i][j] + ':';
// 	}
// 	console.log(output.replace(/:$/, ''));
// }

// // https://codepen.io/webdesigncourse/pen/OJXyPNB?editors=0011
// console.log(typeof 01/01/2002);
// console.log( 0 > NaN);
// console.log( 0 < NaN);
// console.log( 0 == NaN);
// console.log( 0 === NaN);


//https://codepen.io/webdesigncourse/pen/bGpKeoq?editors=0010
// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

// TEST
// function findMaxEven(arr) {
// 	let max = arr[0];
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		if(element > max ){
// 			max = element
// 		}
// 	}

// 	return max;
// }

// let numbers = [2, -4, 5, 3, 9, 0, 1];

// let max = findMaxEven(numbers);
// console.log(`The max of ${numbers} is ${max}`);
