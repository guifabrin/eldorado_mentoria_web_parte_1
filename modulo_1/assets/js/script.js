const searchId = document.querySelector('#searchId');
const profileResult = document.querySelector('.information');
const profileRepos = document.querySelector('.repositories');
const url = "https://api.github.com/users";

async function getProfileUser(user) {
    return fetch(`${url}/${user}`).then(response => response.json()
    )
}

async function getUserRepos(user) {
    return fetch(`${url}/${user}/repos`).then(response => response.json()
    )
}

function showProfile(user) {
    profileResult.innerHTML = `
        <section class="personalInformation">
            <section>
                <img src="${user.avatar_url}" alt="">
            </section>
            <ul class="personalInformationList">
                <li class="userName hidden">  ${user.name}</li>
                <li class="userLogin">  ${user.login}</li>
                <li class="userFollow hidden"> Seguidores ${user.followers} | Seguindo ${user.following}</li>
                <li class="userCompany hidden">  ${user.company}</li>
                <li class="userLocation hidden">  ${user.location}</li>
            </ul>
            <div class="btn">
                <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">Ver Perfil</a>
            </div>
        </section>`;
}

function showRepos(repos) {
    let output = repos.map(repo => {
        return `
            <section class="repositoriesInformation">
                <span><a target="_blank" class="repositoriesTitle" href="${repo.html_url}"><strong>${repo.name}</strong></a></span><br>
                <span class="repositoriesLastUpdate">Ultima Atualização: ${Intl.DateTimeFormat('pt-BR').format(new Date(repo.updated_at))}</span></br>
                <span class="badge badgePrimary">stars: ${repo.stargazers_count}</span>
                <span class="badge badgeSecondary">watch: ${repo.watchers_count}</span>
                <span class="badge badgeSuccess">forks ${repo.forks}</span>
            </section> `
    }).join('')
    profileRepos.innerHTML = output;
}

searchId.addEventListener("keypress", (event) => {
    const user = event.target.value;

    if (event.keyCode == 13) {
        getProfileUser(user).then(showProfile).catch((error) => mostrarError());
        getUserRepos(user).then(showRepos).catch((error) => mostrarError());
    }
})