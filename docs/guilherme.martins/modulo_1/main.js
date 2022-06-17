//----------------Variables-------------------------------------
const url = "https://api.github.com/users/";
let imageChangeFlag = true;
//--------------------------------------------------------------

function easterEgg(headerImg) {
  headerImg.src = `./images/${imageChangeFlag ? "pacha" : "search"}.png`;
  imageChangeFlag = !imageChangeFlag;
}

function search() {
  event.preventDefault();
  const username = document.getElementById("searchText").value;
  hideElements(".error, form, .profile, .repositories");
  getUserInfo(username)
    .then((userInfo) => {
      displayProfile(userInfo);
      return getUserRepo(username);
    })
    .then((userRepo) => displayRepos(userRepo))
    .catch((_) => {
      showElement(".error", "Não foi possivel encontrar usuário!");
    })
    .finally(() => {
      showElement("footer");
    });
}

function hideElements(querySelector) {
  const elements = [...document.querySelectorAll(querySelector)];
  for (const element of elements) {
    element.style.display = "none";
  }
}

function showElement(querySelector, html = false) {
  const element = document.querySelector(querySelector);
  element.style.display = "block";
  if (html !== false) {
    element.innerHTML = html;
  }
}

function displayProfile({ name, avatar_url, company, followers, location }) {
  showElement(
    ".profile",
    `
      <section>
        <h2>${name}</h2>
        
        <div class="imageContainer">
          <img src="${avatar_url}" alt="Avatar do usuário do github" />
        </div>

        <div class="profileContainer">
          <p><label>Localização:</label> ${location}</p>
          <p><label>Empresa:</label> ${company}</p>
          <p><label>Número de Seguidores:</label> ${followers}</p>
        </div>
      </section>
    `
  );
}

function displayRepos(repositories) {
  showElement(
    ".repositories",
    repositories
      .map(({ html_url, name, visibility, language }) => {
        return `
            <article class='project'>
              <a target='_blank' href='${html_url}'><h3>${name}</h3></a> 
              <p>${visibility}</p>
              <p>${language ? language : ''}</p>
            </article>
          `;
      })
      .join("")
  );
}

function backToSearch() {
  showElement("form");
  hideElements("footer, .profile, .repositories, .error");
  document.getElementById("searchText").value = "";
}

async function getUserInfo(username) {
  const response = await fetch(`${url}${username}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function getUserRepo(username) {
  const response = await fetch(`${url}${username}/repos`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
