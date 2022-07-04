const HTTP_STATUS_OK = 200
const MODULOS = [
    'modulo_1',
    'modulo_3',
    'tarefa_1'
]

async function resultadoExiste(usuario, modulo = 'modulo_1'){
    const response = await fetch(`./${usuario}/${modulo}/index.html`)
    return response.status == HTTP_STATUS_OK
}

function adquireMentorados(){
    return fetch('./mentorados.json').then((response) => response.json()) 
}

async function adquireModulosMentorados(mentorados){
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

function montarListaMentoradosModulos(resultado){
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

function carregarPagina(){
    const [, referencia] = document.location.href.split('#')
    if (!referencia) return
    const [nome, modulo] = referencia.split('-')
    if (!nome || !modulo) return
    mostrarModulo(nome, modulo)
}

carregarPagina()
adquireMentorados().then(adquireModulosMentorados).then(montarListaMentoradosModulos)