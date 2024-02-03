let arr = [12, 22, 11, 4, 1, 32, 123, 53, 2112, 241, 154];
arr.sort(function (a, b) {
	return a - b;
});
console.log(arr);

const arr2 = [];
arr2[0] = arr;

arr2[2] = 0;

console.log(arr2);

let a = 5;
let b = 10;

console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		if (j === matrix[i].length - 1) {
			document.write('<strong>' + matrix[i][j] + '</strong>');
		} else document.write(matrix[i][j]);
	}
	document.write('<br/>');
}

let arr4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

let result = new Array(arr4.length).fill([]);

for (let i = 0; i < arr4[0].length; i++) {
	result[i] = [];
	for (let j = 0; j < arr4[i].length; j++) {
		result[i][j] = arr4[j][i];
	}
}
console.log(result);
//---------------------------------------------------

console.log(f2(1000, 23424));
//console.log(f3); Ошибка, такое объявление функции (ниже) не дает ее использовать до объявления

function functionName(a, b) {
	console.log(a + b);
}

function f2(a, b) {
	return a + b;
}

const f3 = function () {
	return 'Hello world';
};

//IIFE
//Переменная functionVariable недоступна вне тела функции
(function () {
	let functionVariable = 35;
	console.log(functionVariable);
})();
