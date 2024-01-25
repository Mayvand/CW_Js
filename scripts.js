// let num = Number(prompt('Введите число'));
// if (isNaN(num)) {
// 	alert('Вы ввели не число');
// } else {
// 	if (num % 2 === 0) {
// 		alert(num > 0 ? num ** 4 : num * 10);
// 	}
// }

// {
// 	if (isNaN(num)) return;
// }

/* let key = +prompt();

switch (key) {
	case 1:
		console.log('это единица');
		break;
	case 2:
		console.log('это двойка');
		break;
	case 3:
		console.log('это тройка');
		break;
	case 4:
		console.log('это четверка');
		break;
	case 5:
		console.log('это пятерка');
		break;
	default:
		console.log('это что-то неизвестное');
		break;
}

let color = prompt('Введите цвет');

if (color == 'Красный') {
	console.log('Стоим');
} else if (color == 'Желтый') {
	console.log('Приготовиться');
} else {
	console.log('Идем');
}
*/

// let a = prompt();
// let b = prompt();

// if ((a > 0 && a < 10) || (b > -10 && b < 0)) {
// 	console.log(a, b);
// } else {
// 	console.log('Условие не сработало');
// }

let day = +prompt('Введите номер дня');
console.log(Math.ceil(day / 31));
