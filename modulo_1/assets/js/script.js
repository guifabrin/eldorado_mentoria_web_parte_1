const search__id = document.querySelector('#search__id');
const profileResult = document.querySelector('.inf');
const profileRepos = document.querySelector('.rep');
const url = "https://api.github.com/users";

async function getUser(user) {
    const profileResponse = await fetch(`${url}/${user}`);
    const reposResponse = await  fetch(`${url}/${user}/repos`);

    const profileResult = await profileResponse.json();
    const profileRepos = await reposResponse.json();

    return {profileResult, profileRepos};
}

function showProfile(user) {
    profileResult.innerHTML = `
<section class="srcInf">
<img class="srcInf__image" src="${user.avatar_url}" alt="">
<ul class="srcInf__information">
    <li class="srcInf__information__userName ">  ${user.name}</li>
    <li class="srcInf__information__userLogin">  ${user.login}</li>
    <li class="srcInf__information__userFollow"> Seguidores ${user.followers} | Seguindo ${user.following}</li>
    <li class="srcInf__information__userCompany">  ${user.company}</li>
    <li class="srcInf__information__userLocation">  ${user.location}</li>
</ul>
<div class="card-body">
<a href="${user.html_url}" class="btn btn-warning btn-block">Ver Perfil</a>
</div>
</section>`;
}

function showRepos(repos){
    let output = '';

    repos.forEach(repo =>{
        output += `
        <section class="repo">
        <span><a target="_blank" class="repo__title"
            href="${repo.html_url}"><strong>${repo.name}</strong></a></span><br>
        <span class="repo__lastUpdate">Ultima Atualização: ${Intl.DateTimeFormat('pt-BR').format(new Date(repo.updated_at))}</span>
        <span class="badge badge-primary">stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">watch: ${repo.watchers_count}</span>
        <span class="badge badge-success">forks ${repo.forks_count}</span>
    </section> `
    })

    profileRepos.innerHTML = output;

}

search__id.addEventListener("keyup", (e) => {
    const user = e.target.value;

    if (user.length > 0) {
        getUser(user).then(res => {
            showProfile(res.profileResult);
            showRepos(res.profileRepos);
        })
    }


})
