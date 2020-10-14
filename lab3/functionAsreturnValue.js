function foo(){
	return function(){
	  console.log(`I'm the returned function`);
	}
}

let bar = foo();
bar();

// foo()();