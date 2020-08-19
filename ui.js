class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">  
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4 ">view profile</a> 
    </div> 
    <div class="col-md-9"> 
    <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
    <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
    <span class="badge badge-success">Followers: ${user.followers}</span>
    <span class="badge badge-info">following: ${user.following}</span>
    <br><br> 
    <ul class="list-group">
    <li class="list-group-item">Comapny ${user.company}</li>
    <li class="list-group-item">website / blog ${user.blog}</li>
    <li class="list-group-item">Location ${user.location}</li>
    <li class="list-group-item">member since: ${user.created_at}</li>
    </ul> 

    </div> 
    </div>
  </div>
  <h3 class="page-heading mb-3">latest repos</h3>
  <div id="repos"></div>
    `;
    }

    // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // show alert message
    showAlert(message, className) {
        this.clearAlert(); // clear remaining alerts
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchcontainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search); // insert before alert
        // timeout for 2 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // show user's repoistories:
    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `        <div class="card card-body mb-2">
        <div class="row">
        <div class="md-6">
        <a href="${repo.html_url}" target="_blank"${repo.full_name}</a> 
        </div>
        <div class="md-6">
        <span class="badge badge-secondary">stars: ${repo.stargazers_count}</span><h3>${repo.full_name}</h3>
        <span class="badge badge-success">watchers: ${repo.watchers_count}</span>
        <span class="badge badge-info">forked: ${repo.forms_count}</span>
        </div>
        </div>
        </div>`;
        });
        document.getElementById('repos').innerHTML = output; // output repositories
    }
    // clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}
