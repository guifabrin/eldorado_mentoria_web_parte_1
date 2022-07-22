async function adquireArquivos() {
    const { tree } = await fetch('https://api.github.com/repos/guifabrin/eldorado_mentoria_web/git/trees/master?recursive=1').then((resposta) => resposta.json())
    const arquivos = tree.filter(({ path }) => path.indexOf('index.html') > -1)
    const resultados = {}
    for (const { path } of arquivos) {
        const [, usuario, modulo, ...resto] = path.split('/')
        if (!resultados[usuario]) {
            resultados[usuario] = []
        }

        resultados[usuario].push([modulo, [usuario, modulo, ...resto].join('/')])
    }
    return resultados
}

function montarLista(resultado) {
    const lista = document.querySelector('#mentorados')
    for (const nome in resultado) {
        const listaModulos = []
        for (const [modulo, localizacao] of resultado[nome]) {
            listaModulos.push(`<li><a href="#${nome}-${modulo}" onclick="mostrarModulo('${localizacao}')">${modulo}</a></li>`)
        }
        lista.innerHTML += `<li>
            <h3>${nome.split('.').join(' ')}</h3>
            <ul>
                ${listaModulos.join('')}
            </ul>
        </li>`
    }
}

function mostrarModulo(localizacao) {
    document.querySelector('#resultado').src = `./${localizacao}`
}

function mostrarErro() {
    document.querySelector('#resultado').src = `./erro.html`
}

function carregarPagina(resultados) {
    const [, referencia] = document.location.href.split('#')
    if (!referencia) return
    const [nome, modulo] = referencia.split('-')
    if (!nome || !modulo || !resultados[nome]) {
        throw new Error()
    }
    const filtrados = resultados[nome].filter(([_modulo]) => _modulo == modulo)
    if (!filtrados.length) {
        throw new Error()
    }
    const [, localizacao] = filtrados[0]
    mostrarModulo(localizacao)
}

adquireArquivos().then((resultados) => {
    montarLista(resultados)
    carregarPagina(resultados)
}).catch(mostrarErro)