export default class JsonService {
	static async getAllUsers() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const users = await response.json();
		return users.map(transformUsers);
	}

	static async getAllPosts() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const posts = await response.json();
		return posts;
	}

	static async getPostsByUserId(id) {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?userId=${id}`
		);
		const posts = await response.json();
		return posts;
	}

	static async getPostById(id) {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const post = await response.json();
		return post;
	}

	static async getUserById(id) {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		const user = await response.json();
		return user;
	}

	static async getCommentById(id) {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
		const comment = await response.json();
		return comment;
	}
}

function transformUsers(user) {
	return {
		value: user.id,
		label: user.name,
	};
}
