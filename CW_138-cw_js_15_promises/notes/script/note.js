class Note {
	constructor(data) {
		// {title, content}
		// if (data.title.length > 0) this.data = data;
		this.data = data;
	}

	edit(data) {
		// {title, content}
		// this.data = data;
		// Object.assign(this.data, data);
		this.data = { ...this.data, ...data }; // {...{title: 'title1', content: 'content1'}, ...{content: 'edit content1'}} -> {title: 'title1', content: 'edit content1'}
	}
}

export default Note;
