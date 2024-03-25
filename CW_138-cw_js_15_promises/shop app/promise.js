const button = document.querySelector('button');
const elem = document.querySelector('.animate');

const animate = () => {
	elem.classList.toggle('active');
	button.removeEventListener('click', animate);
	new Promise((resolve, reject) => {
		elem.addEventListener('transitionend', () => {
			resolve();
		});
		setTimeout(() => {
			reject('Слишком медленно');
		}, 1000);
	})
		.then(
			() => {
				button.addEventListener('click', animate);
			}
			// err => console.log(err)
		)
		.catch(err => console.log(err));
};

button.addEventListener('click', animate);

const p1 = new Promise((resolve, reject) => {});

p1.then(() => new Promise())
	.catch(() => console.log())
	.then(() => new Promise())
	.catch(() => console.log())
	.then(() => new Promise())
	.catch(() => console.log());

const f1 = async () => {
	//..
	return 10;
};

f1().then(res => console.log(res));

setTimeout(() => {
	new Promise(resolve => {
		setTimeout(() => {
			resolve(10);
		}, 200);
	}).then(res => console.log(res));
	new Promise(resolve => {
		setTimeout(() => {
			resolve(20);
		}, 300);
	}).then(res => console.log(res));
}, 1000);

setTimeout(() => {
	new Promise(resolve => {
		setTimeout(() => {
			resolve(30);
		}, 200);
	}).then(res => console.log(res));
	new Promise(resolve => {
		setTimeout(() => {
			resolve(40);
		}, 300);
	}).then(res => console.log(res));
}, 1000);

const f2 = async () => {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(resp => {
			console.log(resp);
			return resp.json();
		})
		.then(data => console.log(data))
		.catch(err => console.log(err));
};

class User {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(val) {
		this._name = val;
	}

	get age() {
		return this._age;
	}

	set age(val) {
		if (val <= 120 && val > 0) {
			this._age = val;
		} else {
			throw new TypeError('Некорректный возраст');
		}
	}
}

const user = new User('Tom', 20);
