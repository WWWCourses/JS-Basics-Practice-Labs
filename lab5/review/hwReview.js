// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---

// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

const SumEven2DimArrayElements = function (arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let subArr = arr[i];
		// console.log( subArr );

		for (let j = 0; j < subArr.length; j++) {
			sum += subArr[j];
		}

	}

	// console.log(`sum: ${sum}`);
	return sum;
}


let sum = SumEven2DimArrayElements( [ [4,4,4], [2,3] ] );
console.log(sum);

// expected output: 12
