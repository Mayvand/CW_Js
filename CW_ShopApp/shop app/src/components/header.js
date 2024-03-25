export default class Header {
	constructor() {
		this.header = document.createElement('header');
		this.header.innerHTML = `
            <div class = 'container'>
            <div className = 'logo'><img src="https://via.placeholder.com/50" alt="logo" /> </div>
            </div>
            <nav>
            <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Shop">Shop</a></li>
            <li><a href="#About">About</a></li>
            </ul>
            </nav>
            <div className="widjet">0 | 0</div>
            </div>
        `;
	}

	render() {
		return this.header;
	}
}
