function pesquisar() 
{
  const procurar = document.getElementById("usuario")
  const perfil = document.getElementById("perfil")
  const url = "https://api.github.com/users"
  const cliente_id = "Iv1.f64f0476d5d303dd"
  const cliente_secreto = "e3e98fc69544d6b5173169f3734909907a0a3ea2"    
  const contar = 10
  const ordenar = "created: ascs"

  async function obterUsuario(user) {
      const perfilResposta = await fetch
      (
         `${url}/${user}?client_id=${cliente_id}&client_secret=${cliente_secreto}`
      )

      const repositorioResposta = await fetch
      (
         `${url}/${user}/repos?per_page=${contar}&sort=${ordenar}&client_id=${cliente_id}&client_secret=${cliente_secreto}`
          
      )
      const perfil = await perfilResposta.json()
      const repositorio = await repositorioResposta.json()
      
      return {profile: perfil, repos: repositorio}
  }

  function mostrarPerfil(user) 
  {
      perfil.innerHTML = 
      `
              <img src="${user.avatar_url}" class="imagem_usuario"></div>
              
              <div class="ver_perfil">
                  <a href="${user.html_url}" target="_blank">Ir para o Perfil</a>
              </div>
          
              <div id="repos"></div>
      `
  }

  function mostraRepositorio(repos) 
  {
      let resultado = ''

      repos.forEach(repo => 
        {
          resultado += 
          ` 
            <div class="lista_repositorio">
              <ul>
                <li>
                    <a href="${repo.html_url}" target="_black">${repo.name.toUpperCase()}</a></div>
                </li>  
              </ul>   
            <div>                
          `
        })

      document.getElementById("repos").innerHTML = resultado
  }

  procurar.addEventListener("keyup", evento => {
      const user = evento.target.value

      if (user.length > 0) 
      {
          obterUsuario(user).then(res => {
              mostrarPerfil(res.profile)
              mostraRepositorio(res.repos)
          })
      }else
      {
        alert('Por favor, digite o nome do usuário!')
      }

  })
}
pesquisar()