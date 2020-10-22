function Developer(name, age, skills,id) {
	// let this = {};
	this.name = name;
	this.age = age;
	this.skills = skills;
	if( id ){
		this.id = id;
	}else{
		this.id = 1;
	}

	// return this;
}

Developer.prototype.greet=function () {
	console.log(`I'm ${this.name}. My ID is: ${this.id}`);
};

let dev1 = new Developer('Pesho', 23, ['JS', 'Python'], 2);
let dev2 = new Developer('Maria', 12, ['CSS']);



dev1.greet();
dev2.greet();