function developerFactory(name, age, skills) {
	let obj = {};
	obj.name = name;
	obj.age = age;
	obj.skills = skills;
	obj.greet =  function () {
		console.log(`I'm ${this.name}.`);
	};

	return obj;
}

let dev1 = developerFactory('Pesho', 23, ['JS', 'Python']);
let dev2 = developerFactory('Maria', 12, ['CSS']);

dev1.greet();
dev2.greet();