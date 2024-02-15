window.addEventListener('load', () => {
	// load DOMContentLoaded
	const root = document.getElementById('root');
	const root2 = document.querySelector('#root');

	console.log(root);
	console.log(root2);

	const items = document.getElementsByClassName('item');
	const items2 = document.querySelectorAll('.item');

	console.log(items[0]);
	console.log(items2);

	// for (let key in items) {
	//     console.log(items[key]);
	// }

	items2.forEach(item => {
		console.log(item);
	});

	document.title = 'hello, js';

	// console.log(window.history);

	/*
	 * textNode - не имеют потомков
	 * elementNode - может иметь потомков (tags)
	 */

	/**
	 * getElementByID
	 * getElementsByTagName
	 * getElementByClassName
	 * getElementByName
	 * querySelector
	 * querySelectorAll
	 * closest
	 */
	const child = document.querySelector('.child3');

	console.log(child.closest('.parent'));

	items2.forEach(item => {
		item.style.fontsize = '40px';
		item.style.cssText = `font-size: 26px;
            color: blue;`;
		item.classList.add('new-class');
	});

	/**
	 * Методы classList
	 * add = добавление имени класса
	 * remove = удаление имени класса
	 * toggle = если нет переданного имени класса - добавляет, иначе - удаляет
	 * contains - проверка, содержит ли элемент указанный класс
	 */

	const newItems = [...items].filter(item => !item.classList.contains('note'));
	console.log(newItems);

	/**
	 * get/set
	 * innerText - позволяет работать только с текстовым содержимым
	 * innerHTML - позволяет работать с любым содержимым (HTML)
	 */

	/**
	 * навигация по DOM дереву
	 * children - потомки элементы
	 * childNode - все потомки (тексты пробелы переносы)
	 * firstChild - первый любой потомок
	 * firstElementChild - первый потомок элемент
	 * lastChild - последний любой потомок
	 * lastElementChild - последний потомок элемент
	 * parentNode - родитель
	 * nextSibling - следующий соседний узел
	 * nextElementSibling - следующий соседний элемент
	 * previousSibling -
	 * previousElementSibling -
	 */

	const link1 = document.links[0].parentElement;
	const link2 = document.links[1].parentElement;

	console.log(link1.innerText);
	console.log(link1.innerHTML);

	link1.innerText = `<p>lorem qowihfpqighpegj</p>`;

	link2.innerHTML = `<a href=""><img src="https://via.placeholder.com/120" alt="" /></a>`;

	// document.body.innerHTML = '';
	const p = document.createElement('p');
	p.classList.add('item');
	p.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, dolor.`;
	p.setAttribute('data-test', '2h342k5');
	p.style.cssText = `
    font-size: 40px;
    text-transform: uppercase;
`;

	root.append(p);

	root.insertBefore(p, document.getElementById('item1'));

	const hidden = document.querySelector('.hidden').children[0].cloneNode(true);

	root.insertBefore(hidden, p);

	hidden.remove();
	console.log('Документ загружен');
});
