let dev1 = {
	"job title": 'Sinior', // do not do this
	"name": 'Pesho',
	'age': 23,
	'skills' : ['JS', 'Python'],
	'applyForJob': function () {
		console.log(`this in method:`);
		console.dir(this);
		console.log(`I'm ${this.name}.`);
	}
}

let dev2 = {
	'name': 'Maria',
	'age': 23,
	'skills' : ['JS', 'Python'],
	'applyForJob': function () {
		console.log(`this in method:`);
		console.dir(this);

		console.log(`I'm ${this.name}.`);
	}
}

console.log( dev1.name );
console.log( dev1["name"] );

let propName = 'age';
console.log( dev1[propName] ); // 23
console.log( dev1['age']   );  // 23

//
