function foo() {
	console.log(`hi`);
	console.dir(this);
}

let obj = {
	id: 1,
	bar: foo
}


foo();
obj.bar();
