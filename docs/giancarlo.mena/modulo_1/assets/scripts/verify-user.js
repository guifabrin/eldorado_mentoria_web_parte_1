const API_URL = "https://api.github.com/users/";

const preventLoad = document.querySelector("#form");

preventLoad.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const user = await fetch(`${API_URL}` + name).then((userData) =>
    userData.json()
  );

  if (user.login == null) {
    alert("Usuário não encontrado, digite novamente!");
    return;
  }

  window.location = "./profile-page.html?name=" + name;
});
