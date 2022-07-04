const HTTP_STATUS_OK = 200
const MODULOS = [
    'modulo_1',
    'modulo_3',
    'tarefa_1'
]

async function resultadoExiste(usuario, modulo = 'modulo_1'){
    const resposta = await fetch(`./${usuario}/${modulo}/index.html`)
    return resposta.status == HTTP_STATUS_OK
}

function adquireMentorados(){
    return fetch('./mentorados.json').then((resposta) => resposta.json()) 
}

async function adquireModulos(mentorados){
    mentorados.sort()
    const resultados = {}
    for(const mentorado of mentorados) {
        resultados[mentorado] = []
        for (const modulo of MODULOS){
            const existe = await resultadoExiste(mentorado, modulo)
            if (!existe) continue
            resultados[mentorado].push(modulo)
        }
    }
    return resultados
}

function montarLista(resultado){
    const lista = document.querySelector('#mentorados')
    for (const nome in resultado){
        const listaModulos = []
        for (const modulo of resultado[nome]){
            listaModulos.push(`<li><a href="#${nome}-${modulo}" onclick="mostrarModulo('${nome}', '${modulo}')">${modulo}</a></li>`)
        }
        lista.innerHTML += `<li>
            <h3>${nome}</h3>
            <ul>
                ${listaModulos.join('')}
            </ul>
        </li>`
    }
}

function mostrarModulo(nome, modulo) {
    document.querySelector('#resultado').src = `./${nome}/${modulo}/index.html`
}

function carregarPagina(resultados){
    const [, referencia] = document.location.href.split('#')
    if (!referencia) return
    const [nome, modulo] = referencia.split('-')
    if (!nome || !modulo || !resultados[nome] || resultados[nome].indexOf(modulo)==-1){
        document.querySelector('#resultado').src = `./erro.html`
        return
    }
    mostrarModulo(nome, modulo)
}


adquireMentorados().then(adquireModulos).then((resultados)=>{
    montarLista(resultados)
    carregarPagina(resultados)
})