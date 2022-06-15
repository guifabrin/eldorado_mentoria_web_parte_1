import axios from 'axios'

import './styles/main.scss'
import search from './assets/search.png'

const searchImg = document.getElementById('searchImg') as HTMLImageElement
const searchForm = document.querySelector<HTMLFormElement>('form')
const searchInput = document.querySelector<HTMLInputElement>('#searchText')
const backButton = document.querySelectorAll('button')[1]

const url: string = 'https://api.github.com/users/'

searchImg.src = search

type User = {
  name: string
  avatar_url: string
  company: string
  followers: string
  location: string
}

type Repository = {
  html_url: string
  name: string
  visibility: string
  language: string
}

function hideElements(querySelector: any) {
  const elements = [...document.querySelectorAll(querySelector)]
  for (const element of elements) {
    element.style.display = 'none'
  }
}

function showElement(querySelector: string, html?: string) {
  const element = document.querySelector(querySelector) as HTMLElement
  element.style.display = 'flex'
  if (html) {
    element.innerHTML = html
  }
}

async function getUserInfo(username: string) {
  const response = await axios.get(`${url}${username}`)
  return response.data
}

async function getUserRepo(username: string) {
  const response = await axios.get(`${url}${username}/repos`)
  return response.data
}

function displayProfile({
  name,
  avatar_url,
  company,
  followers,
  location,
}: User) {
  showElement(
    '.profile',
    `
        <div class="imageContainer">
          <img src="${avatar_url}" alt="Avatar do usuário do github" />
        </div>
  
        <div class="profileContainer">
          <p><i class="fa-solid fa-user"></i>
          <label> Nome Completo:</label> ${name}</p>
          <p><i class="fa-solid fa-location-dot"></i>
          <label>Localização:</label> ${location}</p>
          <p><i class="fa-solid fa-building"></i>
          <label>Empresa:</label> ${company}</p>
          <p><i class="fa-solid fa-people-group"></i>
          <label>Número de Seguidores:</label> ${followers}</p>
        </div>
      `
  )
}

function displayRepos(repositories: Repository[]) {
  showElement(
    '.repositories',
    repositories
      .map(({ html_url, name, visibility, language }) => {
        return `
              <div class='project'>
                <a target='_blank' href='${html_url}'>${name}</a> 
                <p>${visibility}</p>
                <p>${language}</p>
              </div>
            `
      })
      .join(' ')
  )
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = searchInput.value
  hideElements('.error, .form, .profile, .repositories ,footer')
  getUserInfo(username)
    .then((userInfo) => {
      displayProfile(userInfo)
      return getUserRepo(username)
    })
    .then((userRepo) => displayRepos(userRepo))
    .catch((_: any) => {
      showElement('.error', 'Não foi possivel encontrar usuário!')
    })
    .finally(() => {
      showElement('footer')
    })
})

backButton.addEventListener('click', () => {
  showElement('.form')
  hideElements('footer, .profile, .error')
  searchInput.value = ''
  document.querySelector('.repositories').innerHTML = ''
})
