// function foo() {
// 	console.log(`foo`);
// }
// function bar(x) {
// 	console.log(`x in bar: ${x}`);
// }

// function setTimeout(f, milliseconds){
// 	wait(milliseconds);
// 	f();
// }


// setTimeout(foo, 2000 );
// setTimeout( bar(3), 2000 );

// start: 19:00:00
// 19:00:00 => setTimeout( undefined, 2000 );

// 19:00:00 => x in bar: 3
// 19:00:02 => undefined(); => not



let foo = function(){
	console.log(`Hello`);
};

setTimeout(foo, 500);
setTimeout(foo, 1000);


