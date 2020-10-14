// if is a STATEMENT, not EXPRESSION
// let x = if (1) {
// 	console.log(`1`);
// }

// let y = 5;
// let foo = function () {
// 	console.log(`2`);
// }


// function foo(f) {
// 	f();
// }

// function bar () {
// 	console.log(`bar`);
// }

// let x = 3;
// foo(bar);


function caller(callback){
	console.log("caller will call the callback:")
	callback();
}

function callback1(){
	console.log("I'm the callback1 function!")
}

function callback2(){
	console.log("I'm the callback2 function!")
}

caller(callback1);
caller(callback2);
callback1();

//caller will call the callback:
//I'm the callback1 function

//caller will call the callback:
//I'm the callback2 function



