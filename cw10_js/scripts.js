const makeSlider = selector => {
	const sliders = document.querySelectorAll(selector);
	if (!sliders) return;

	/**
	 * @param {HTMLElement} sliderContainer
	 */
	const sliderController = sliderContainer => {
		const slides = sliderContainer.querySelector('.slides');
		if (!slides) return;

		const next = sliderContainer.querySelector('.next');
		const prev = sliderContainer.querySelector('.prev');

		const pagination = sliderContainer.querySelector('.pagination');
		const paginationItems = [];

		if (pagination) {
			[...slides.children].forEach((item, i) => {
				let bullet = document.createElement('span');
				bullet.classList.add('bullet');
				if (i === 0) bullet.classList.add('bullet-active');
				bullet.addEventListener('click', () => bulletHandler(i));
				paginationItems.push(bullet);
				pagination.append(bullet);
			});
		}

		const bulletHandler = index => {
			slides.style.transform = `translateX(-${index * 100}%)`;
			if (paginationItems.length > 0) {
				paginationItems.forEach((item, i) => {
					if (index === i) {
						item.classList.add('bullet-active');
					} else item.classList.remove('bullet-active');
				});
			}
		};

		const switchSlide = event => {
			const isNext = event.target.classList.contains('next');

			let x = slides.style.transform || '0';
			x = x.replace('translateX(', '');
			x = Math.abs(parseInt(x)); //0, 100, 200, 300 .... 900 %;

			if (isNext) {
				if (x < (slides.children.length - 1) * 100) {
					x += 100;
				} else {
					x = 0;
				}
			} else {
				if (x > 0) {
					x -= 100;
				} else {
					x = (slides.children.length - 1) * 100;
				}
			}

			// if (paginationItems.length > 0) {
			// 	let marker = x / 100;
			// 	paginationItems.forEach((item, i) => {
			// 		if (marker === i) {
			// 			item.classList.add('bullet-active');
			// 		} else item.classList.remove('bullet-active');
			// 	});
			// }

			// slides.style.transform = `translateX(-${x}%)`;
			bulletHandler(x / 100);
		};

		next.addEventListener('click', switchSlide);
		prev.addEventListener('click', switchSlide);
	};

	// console.log(sliders);
	// console.log([...sliders]);
	[...sliders].forEach(slider => sliderController(slider));
};

makeSlider('.slider__wrapper');
