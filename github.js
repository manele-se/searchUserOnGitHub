class GitHub {
	constructor() {
		this.client_id = 'a0421d553e7d7a23f148';
		this.client_secret = '6994bddb1ae9e96d5ddda21affc482bc70538b98';
		this.repos_count = 5;
		this.repos_sort = 'created:asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const reposResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this
				.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();
		//return an object
		return {
			profile,
			repos
		};
	}
}
