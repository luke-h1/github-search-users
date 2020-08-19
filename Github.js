class Github {
    constructor() {
        this.client_id = '08963522b04ef051f1b8';
        this.client_secret = '23d10aabbc8bcef26c799282dfbe45fa063d26df';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_ID={CLIENT_ID}&client_secret={CLIENT_SECRET}`
        );
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_ID=08963522b04ef051f1b8&client_secret=cef7f16c9a2aeb072032790d125c3dd3ae4ae99e`
        );
        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile: profileData,
            repos: repos,
        };
    }
}
