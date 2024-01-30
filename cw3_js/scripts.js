// let i = -10;
// for (let i = 0; i < 5; i++) {
// 	console.log('i = ' + i);
// }

// console.log(i);

// let a = 0;
// console.time('time_1');
// for (let i = 0; i < 100; i++) {
// 	a += i;
// }

// console.timeEnd('time_1');

// let b = 0;
// console.time('time_2');
// let i = 0;
// while (i < 100) {
// 	b += i;
// 	i++;
// }

// console.timeEnd('time_2');

// console.log(a, b);

// for (let i = 0; i < 'aeofanofneon'.length; i++) {
// 	console.log('aeofanofneon'[i]);
// }

//calculator
// let rez = 0;
// let num = null;
// while (true) {
// 	num = num || prompt('Введите число');
// 	if (num === '' || isNaN(num)) break;
// 	let op = prompt('Введите операцию: + / * -');

// 	if (op !== '/' || op !== '*' || op !== '-' || op !== '+' || op !== '=')
// 		continue;
// 	if (op === '=') break;
// 	num = Number(num);

// 	switch (op) {
// 		case '/':
// 			rez /= num;
// 			break;
// 		case '*':
// 			rez *= num;
// 			break;
// 		case '-':
// 			rez -= num;
// 			break;
// 		case '+':
// 			rez += num;
// 			break;
// 	}
// 	num = null;
// }

// console.log(rez);

// Таблица умножения

// for (let i = 0; i < 11; i++) {
// 	document.write('<hr>');
// 	for (let j = 0; j < 11; j++) {
// 		document.write(i + ' * ' + j + ' = ' + i * j + '<br>');
// 	}
// }

// for (let key in 'aeognwoen') {
// 	console.log(key);
// }

// for (let val of 'aegnwepgn') {
// 	console.log(val);
// }

let arr = [1, 2, 3, 4];
//        [0, 1, 2, 3]
let arr2 = new Array();

arr[100] = 'lol';
console.log(arr.length);
