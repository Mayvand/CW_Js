// let s = 'abraccadadfpoj';
// console.log(s);
// s[0] = 'A';
// s = s.replace('a', 'A');
// console.log(s);

// const toUpperFirst = str => str[0].toUpperCase() + str.slice(1);
// console.log(toUpperFirst('string'));

/**
 *@param {string} email
 */

function isEmail(email) {
	let regExp = new RegExp(
		'/^[a-z]{1}[a-z0-9-_.]{1,}@[a-z]{1}[a-z0-9]+.[a-z]{2,12}',
		'g'
	);

	let regExp2 = /^[a-z]{1}[a-z0-9\-_\.]{1,}@[a-z]{1}[a-z0-9]+\.[a-z]{2,12}/g;

	return [regExp.test(email), regExp2.test(email)];
}

console.log(isEmail('oiahefho@gmail.com'));
console.log(isEmail('12afgewga.test'));
console.log(isEmail('aegwe!@mail.ru'));

/*
* - элемент может встречаться в строке либо неогр. количество раз либо 0 раз.
+ - сопоставление 1+ раз
? - 0 или более раз

 */
