
//declaração de variaveis
  const usuario = document.querySelector('input#usuario')

  usuario.addEventListener("keydown", function (evento) 
{  const ENTER_KEY_CODE = 13
  if (evento.keycode === ENTER_KEY_CODE)
    { 
        pesquisar()
    }
})

  function pesquisar()
{
  url = `https://api.github.com/users/${usuario.value}/repos`
    
  if(usuario.value)
    { 
      return getApiGitHub()
    }

  else
   { 
    alert('Por favor, digite algo!')
   }
}     

  const ul = document.querySelector('ul')

  function getApiGitHub() 
{
  fetch(url)
  .then(async res => 
  {  
    if(!res.ok) 
    {
      throw new Error(res.status)
    }
    ////retornar uma promessa
    const data = await res.json()
    
    data.map(item => 
    {
      let lista = document.createElement('li')
            let aElemento = document.createElement('a')
          
      lista.innerHTML = ` 
     
        <strong>${item.name.toUpperCase()}</strong>
        <br>
        <br>
        <span>${item.url}</span>
        <br>
        <br>
        <span>Data Criação: 
        ${Intl.DateTimeFormat('pt-BR')
        .format(new Date(item.created_at))}
        </span>
          `
          ul.appendChild(lista)
    })
    
  }).catch(evento => console.log(evento))
}
    
   
   

