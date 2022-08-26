const API_URL = "https://api.github.com/users/";

window.addEventListener("load", async () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  const user = await fetch(`${API_URL + name}`).then((userData) =>
    userData.json()
  );
  const reposLib = await fetch(`${API_URL + name}/repos`).then((userRepos) =>
    userRepos.json()
  );

  const userInfoList = document.querySelector(".infos");
  const userRepositoryList = document.querySelector(".repository-list");

  const searchInput = document.querySelector("#search-repos");

  reposSearch(searchInput, userRepositoryList, reposLib);

  showUserInfo(user);

  createUserInfoLi(user.company, userInfoList);
  createUserInfoLi(user.location, userInfoList);
  createUserInfoLi(user.email, userInfoList);

  showUserRepos(reposLib, userRepositoryList);
});

const createUserInfoLi = (props, list) => {
  if (props) {
    const li = document.createElement("li");

    li.innerText = props;

    list.appendChild(li);
  }
};

const showUserInfo = (user) => {
  document.querySelector("#profile-image").src = user.avatar_url;
  document.querySelector("#name").innerHTML = user.name;
  document.querySelector("#username").innerHTML = user.login;
  document.querySelector("#follow-info").innerHTML =
    "Followers " + user.followers + " | Following " + user.following;
};

const createUserReposLi = (props) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const pLanguage = document.createElement("p");

  li.className = "repository";
  h2.className = "hover-underline-animation";
  pLanguage.className = "language";

  h2.innerText = props.name;
  pLanguage.innerText = props.language;

  li.appendChild(h2);
  li.appendChild(pLanguage);

  h2.addEventListener("click", () => {
    window.location = props.clone_url;
  });

  return li;
};

const showUserRepos = (reposLib, userRepositoryList) => {
  for (const repos of reposLib) {
    userRepositoryList.appendChild(createUserReposLi(repos));
  }
};

const reposSearch = (searchInput, userRepositoryList, reposLib) => {
  searchInput.addEventListener("input", (event) => {
    const name = searchInput.value.toLowerCase();
    userRepositoryList.innerHTML = "";

    if (name === "") {
      showUserRepos(reposLib, userRepositoryList);
      return;
    }
    reposLib
      .filter((v) => v.name.toLowerCase().includes(name))
      .forEach((v) => userRepositoryList.appendChild(createUserReposLi(v)));
  });
};
