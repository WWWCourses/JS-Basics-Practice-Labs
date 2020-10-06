// TASK: sum even numbers in array:
let numbers = [1,1,3,2,4,9];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	let element = numbers[i];
	// console.log(element);
	if (element%2 === 0) {
		sum += element;
	}
}
console.log(`sum is: ${sum}`);
