//Замыкания

// const makeCounter = function () {
// 	let counter = 0;

// 	return function () {
// 		return counter++;
// 	};
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

//--------------------------------------------

function fib(num) {
	if (num <= 1) return num;
	else return fib(num - 1) + fib(num - 2);
}

const memoize = function (fn) {
	let cache = {};
	return function (...args) {
		let n = args[0];
		if (n in cache) {
			return cache[n];
		} else {
			let result = fn(n);
			cache[n] = result;
			return result;
		}
	};
};

const fib2 = memoize(function (num) {
	if (num <= 1) return num;
	else return fib2(num - 1) + fib2(num - 2);
});

// console.log(fib2(100));

let a = [1, 2, 3];
let c = [...a];

const f1 = function (...a) {
	return a;
};

// console.log(...f1(1, 2, 3, 4, 5));

const f2 = (...a) => {
	return a;
};

// () => operation

const arF1 = () => 1 + 1; // const arF1 = () => {return false};

console.log(arF1());

const arF2 = x => x ** x;

console.log(arF2(5));

const arF3 = (a, b) => a + b;

console.log(arF3(5, 6));
