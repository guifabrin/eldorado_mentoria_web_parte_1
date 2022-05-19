//----------------Flags-----------------------------------------
let imageChangeFlag = true;

//-----------------------------------------------------------------

function easterEgg(header_img) {
  header_img.src = imageChangeFlag ? "./pacha.png" : "./search.png";
  imageChangeFlag = !imageChangeFlag;
}

const url = "https://api.github.com/users/";

async function startSearch(event) {
  event.preventDefault();
  const username = document.getElementById("search").value;
  const urlUsername = `${url}${username}`;
  cleanPrevious();
  const userInfo = await getUserInfo(urlUsername);
  displayProfile(userInfo);

  const urlRepository = `${urlUsername}/repos`;
  const userRepo = await getUserRepo(urlRepository);
  displayRepos(userRepo);
}

function cleanPrevious() {
  document.getElementById("box").style.display = "none";
  document.getElementById("submit_btn").style.display = "none";
  document.getElementById("repositories").innerHTML = "";
}

function displayProfile(jsonResponse) {
  const { name, avatar_url, company, followers, location } = jsonResponse;

  const profileImage = `<img src="${avatar_url}" alt="" id="profileImage" />`;
  const markup = `
    <p id="name">Nome Completo:  ${name}</p>
    <p id="location">Localização:  ${location}</p>
    <p id="company">Empresa:  ${company}</p>
    <p id="followers">Número de Seguidores:  ${followers}</p>`;

  document.getElementById("imgcontainer").innerHTML = profileImage;
  document.getElementById("profile").innerHTML = markup;

  document.getElementById("profile").style.display = "block";
  document.getElementById("imgcontainer").style.display = "block";
}

function displayRepos(jsonRepo) {
  const markup = `
      
        ${jsonRepo
          .map(
            (i) =>
              `<a class='projetonome' target='_blank' href='${i.html_url}'>${i.name}</a> 
        <p>${i.visibility}</p>
        <p>${i.language}</p>
        <br></br>`
          )
          .join("")}`;
  document.getElementById("repositories").innerHTML = markup;

  document.getElementById("repositories").style.display = "block";
  document.querySelector("footer").style.display = "block";
}

function showError() {
  document.getElementById("error").style.display = "block";
  document.getElementById("errorMessage").innerText =
    "Não foi possivel encontrar usuário!";
}

function backToSearch() {
  document.getElementById("box").style.display = "block";
  document.getElementById("submit_btn").style.display = "inline";
  document.getElementById("profile").style.display = "none";
  document.getElementById("imgcontainer").style.display = "none";
  document.getElementById("repositories").style.display = "none";
  document.getElementById("error").style.display = "none";
  document.querySelector("footer").style.display = "none";
  document.getElementById("search").value = "";
}

async function getUserInfo(urlUsername) {
  try {
    const response = await fetch(urlUsername);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (e) {
    showError();
  }
}

async function getUserRepo(urlRepository) {
  try {
    const response = await fetch(urlRepository);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (e2) {
    showError();
  }
}
