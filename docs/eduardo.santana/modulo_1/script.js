const url = 'https://api.github.com/users/'

function showError(message) {
  document.getElementById('error').innerText = message
}

function showUserInformation(data) {
  for (const key in data){
    const element = document.getElementById(key)
    if (!element) continue
    const attrib = key === 'avatar_url' ? 'src' : 'innerText'
    element[attrib] = data[key]
  }
}

function buildUserRepositories(data) {
  const repositoryContainer = document.querySelector('.repositoryContainer')
  for (const object of data) {
    const divItem = document.createElement('article')
    divItem.classList.add('repository')

    const titleItem = document.createElement('h3')
    titleItem.innerText = object.name
    divItem.appendChild(titleItem)

    if (object.language){
      const languageItem = document.createElement('p')
      languageItem.innerText = object.language
      divItem.appendChild(languageItem)
    }

    repositoryContainer.appendChild(divItem)
  }
}

async function getGithubUser(username) {
  const response = await fetch(`${url}${username}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

async function getGithubUserRepositories(username) {
  // Search for repository
  const response = await fetch(`${url}${username}/repos`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const json = await response.json()
  return {
    data: json,
  }
}
// variável é utilizada no HTML
// eslint-disable-next-line no-unused-vars
function search(event) {
  event.preventDefault()
  document.querySelector('.content').style.display = 'none'
  document.querySelector('.error').style.display = 'none'
  const username = document.getElementById('searchText').value
  getGithubUser(username)
    .then((data) => {
      showUserInformation(data)
      return getGithubUserRepositories(username)
    })
    .then(({ data }) => {
      buildUserRepositories(data)
     document.querySelector('.content').style.display = 'flex'
    })
    .catch((error) => {
      console.error(error)
      document.querySelector('.error').style.display = 'block'
      showError(
        'Não foi possivel capturar as informações do usuário! Tente Novamente!'
      )
    })
}