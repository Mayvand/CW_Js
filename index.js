let num = 2.3;
let num2 = 33;

// Operators
// math: * + - / %(остаток от деления) **
// Присваивание =
// Сравнения > < == != !== === >= <=
// Логические (! - не) (|| - или) (&& - и)
//

console.log(9 % 4);
console.log('A'.charCodeAt());
let str = prompt('Введите строку');
// let f = str || 'Ничего не введено'; Ложные значения - 0 '' null undefined
// let f = str ?? 'Ничего не введено'; // ?? - оператор нулевого слияния

let f = 'Ничего не введено' && str && null;
console.log(f);
