let initialCount = 1;

// set initial counter value:
let counter = document.getElementById("counter");
counter.innerHTML = initialCount;

// on "+" button click, increment counter:
{/* <button class="increment">+</button> */}
let incBtn = document.querySelector(".increment");
incBtn.addEventListener('click', incrementCounter );

function incrementCounter() {
	initialCount += 1;
	counter.innerHTML = initialCount;
}

// TASK: implement decrementCounter on "-" click