let dev1 = {
	"name": 'Pesho',
	'age': 23,
	'skills' : ['JS', 'Python'],
	'greet': function () {
		console.log(`I'm ${this.name}.`);
	}
}

let dev2 = {
	'name': 'Maria',
	'age': 34,
	'skills' : ['JS', 'Python'],
	'greet': function () {
		console.log(`I'm ${this.name}.`);
	}
}

let obj3 = {};

// TASK: log the name of each developer
let developers = [ dev1, dev2 ];
for (let i = 0; i < developers.length; i++) {
	console.log( developers[i].name );

}



// console.log( dev[i].name);
// console.log( dev2.name);