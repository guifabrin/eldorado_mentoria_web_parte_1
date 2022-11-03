function pesquisar() 
{ const perfil_usuario = document.getElementById("perfil_usuario")
  const url = "https://api.github.com/users"
  const cliente_id = "Iv1.f64f0476d5d303dd"
  const cliente_secreto = "e3e98fc69544d6b5173169f3734909907a0a3ea2"    
  const contar = 10
  const ordenar = "created: ascs"

  async function obterUsuario(user) 
  {
      const perfilResposta = await fetch
      (
         `${url}/${user}?client_id=${cliente_id}&client_secret=${cliente_secreto}`
      )
      const perfil = await perfilResposta.json()
      
      return {perfil}
  }

  async function obterRepositorio(user) 
  {
    const repositorioResposta = await fetch
    (
       `${url}/${user}/repos?per_page=${contar}&sort=${ordenar}&client_id=${cliente_id}&client_secret=${cliente_secreto}`   
    )
    const repositorio = await repositorioResposta.json()
    
    return {repositorio}
  }

  function mostrarPerfil(user) 
  {
      perfil_usuario.innerHTML = 
      `
              <img src="${user.avatar_url}" class="imagem_usuario"></div>
              
              <div class="ver_perfil">
                  <a href="${user.html_url}" target="_blank">Ir para o Perfil</a>
              </div>
          
              <div id="repos_usuario"></div>
      `
  }

  function mostraRepositorio(repos) 
  { 
    let resultado = repos.map(repo =>
    {
      return  ` 
        <div class="lista_repositorio">
          <ul>
            <li>
                <a href="${repo.html_url}" target="_black">${repo.name.toUpperCase()}</a></div>
            </li>  
          </ul>   
        <div>                
      `
    }).join('')

     document.getElementById("repos_usuario").innerHTML = resultado
  }

const botao = document.getElementById("botao")

botao.addEventListener('click', event => 
{ 
  const user = document.getElementById("usuario").value

  if (user.length > 3) 
    { event.preventDefault()
        obterUsuario(user).then(res => 
      {
              mostrarPerfil(res.perfil)    
      })

      if(user.length > 3)
      { 
        obterRepositorio(user).then(res =>
        {
          mostraRepositorio(res.repositorio) 
        })
      }
    }
  else
  {
    alert('Por favor, digite o nome do usuário!')
  }
  })
}
pesquisar()


