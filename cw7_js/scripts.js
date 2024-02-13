// const formateDate = date => {
// 	const dateExp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/g;
// 	return date.match(dateExp);
// };

// console.log(formateDate('1994-31-01'));

const lamp = {
	status: false,
	// power: 60,
	voltage: 220,
	toggle: function () {
		this.status = !this.status;
		console.log(this);
		return this.status ? 'Лампа включена' : 'Лампа выключена';
	},
};

Object.defineProperty(lamp, 'power', {
	// value: 60,
	// writable: false,
	enumerable: false,
	configurable: true,
	get: function () {
		return power;
	},
	set: val => {
		if (val > 0) {
			power = val;
		}
	},
});

console.log(lamp.toggle());

function Lamp(power, voltage, cost) {
	this.status = false;
	this.cost = cost; // цена за время работы в часах
	this.time = 0;
	this.timerId = null;

	this.toggle = function () {
		this.status = !this.status;
		if (!this.status) {
			clearInterval(this.timerId);
		} else {
			this.timer();
		}
		return this.status ? 'Лампа включена' : 'Лампа выключена';
	};

	this.timer = () => {
		this.timerId = setInterval(() => {
			this.time += 1;
		}, 1000);
	};

	this.getCost = () => {
		return this.cost * (parseFloat(this.power) * (this.time / 3600));
	};

	this.info = function () {
		return `Статус: ${this.status}, мощность: ${this.power}, напряжение: ${
			this.voltage
		}, потрачено денег на работу лампы: ${this.getCost()}`;
	};

	// this.test = function () {
	// 	console.log(this);
	// 	setTimeout(privateMethod, 3000);
	// };

	Object.defineProperties(this, {
		power: {
			enumerable: false,
			configurable: false,
			set: val => {
				if (val > 0) {
					power = val;
				}
			},
			get: () => `${power}W`,
		},
		voltage: {
			enumerable: false,
			configurable: false,
			set: val => {
				if (val > 0) {
					voltage = val;
				}
			},
			get: () => `${voltage}V`,
		},
	});

	// function privateMethod() {
	// 	console.log(self.getPower());
	// }

	// const privateMethod = () => {
	// 	console.log(this.getPower());
	// };

	// Lamp.counter++;
}

class Lamp2 {
	constructor(power, voltage) {
		this.status = false;
		this._power = power;
		this._voltage = voltage;
	}

	set power(val) {
		this._power = val;
	}

	get power() {
		return this._power;
	}
}

Lamp.counter = 0;
Lamp.getCounter = function () {
	return Lamp.counter;
};

const lamp40 = new Lamp2(40, 220, 1);
const lamp10 = new Lamp(100, 20, 1);
const lamp20 = new Lamp(20, 210, 1);
const lamp30 = new Lamp(30, 200, 1);
