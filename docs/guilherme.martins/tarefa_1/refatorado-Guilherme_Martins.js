const extension = '.png';
const browser = 'Chrome';

const efeitosUrl = './assets/images/simulador/Efeitos/'
const eletrosUrl = './assets/images/simulador/Eletros/'

function load() {
    im51on = new Image(2, 15);
    im51on.src = './assets/images/simulador/Eletros/luzon.png';
    im51off = new Image(2, 15);
    im51off.src = './assets/images/simulador/Eletros/luzoff.png';
    im52on = new Image(12, 20);
    im52on.src = './assets/images/simulador/Efeitos/tvon.gif';
    im52off = new Image(12, 20);
    im52off.src = './assets/images/simulador/Eletros/tvoff.png';
    im53on = new Image(8, 7);
    im53on.src = './assets/images/simulador/Eletros/gameon.png';
    im53off = new Image(8, 7);
    im53off.src = './assets/images/simulador/Eletros/gameoff.png';
    im54on = new Image(9, 6);
    im54on.src = './assets/images/simulador/Eletros/dvdon.png';
    im54off = new Image(9, 6);
    im54off.src = './assets/images/simulador/Eletros/dvdoff.png';
    im55on = new Image(10, 10);
    im55on.src = './assets/images/simulador/Eletros/somon.png';
    im55off = new Image(10, 10);
    im55off.src = './assets/images/simulador/Eletros/somoff.png';
    im56on = new Image(14, 7);
    im56on.src = './assets/images/simulador/Eletros/climatizadoron.png';
    im56off = new Image(14, 7);
    im56off.src = './assets/images/simulador/Eletros/climatizadoroff.png';
    im21on = new Image(2, 15);
    im21on.src = './assets/images/simulador/Eletros/luzon.png';
    im21off = new Image(2, 15);
    im21off.src = './assets/images/simulador/Eletros/luzoff.png';
    im22on = new Image(18, 69);
    im22on.src = './assets/images/simulador/Eletros/geladeiraon.png';
    im22off = new Image(18, 69);
    im22off.src = './assets/images/simulador/Eletros/geladeiraoff.png';
    im23on = new Image(8, 10);
    im23on.src = './assets/images/simulador/Eletros/microondason.png';
    im23off = new Image(8, 10);
    im23off.src = './assets/images/simulador/Eletros/microondasoff.png';
    im24on = new Image(7, 10);
    im24on.src = './assets/images/simulador/Eletros/fornoon.png';
    im24off = new Image(7, 10);
    im24off.src = './assets/images/simulador/Eletros/fornooff.png';
    im25off = new Image(12, 19);
    im25off.src = './assets/images/simulador/Eletros/coifaoff.png';
    im31on = new Image(2, 15);
    im31on.src = './assets/images/simulador/Eletros/luzon.png';
    im31off = new Image(2, 15);
    im31off.src = './assets/images/simulador/Eletros/luzoff.png';
    im32on = new Image(12, 23);
    im32on.src = './assets/images/simulador/Eletros/mqlavaron.png';
    im32off = new Image(12, 23);
    im32off.src = './assets/images/simulador/Eletros/mqlavaroff.png';
    im33on = new Image(14, 23);
    im33on.src = './assets/images/simulador/Eletros/mqsecaron.png';
    im33off = new Image(14, 23);
    im33off.src = './assets/images/simulador/Eletros/mqsecaroff.png';
    im41on = new Image(2, 15);
    im41on.src = './assets/images/simulador/Eletros/luzon.png';
    im41off = new Image(2, 15);
    im41off.src = './assets/images/simulador/Eletros/luzoff.png';
    im42on = new Image(9, 20);
    im42on.src = './assets/images/simulador/Efeitos/tvon.gif';
    im42off = new Image(9, 20);
    im42off.src = './assets/images/simulador/Eletros/tvoff.png';
    im43on = new Image(14, 7);
    im43on.src = './assets/images/simulador/Eletros/climatizadoron.png';
    im43off = new Image(14, 7);
    im43off.src = './assets/images/simulador/Eletros/climatizadoroff.png';
    im71on = new Image(2, 15);
    im71on.src = './assets/images/simulador/Eletros/luzon.png';
    im71off = new Image(2, 15);
    im71off.src = './assets/images/simulador/Eletros/luzoff.png';
    im72on = new Image(5, 10);
    im72on.src = './assets/images/simulador/Eletros/abajuron.png';
    im72off = new Image(5, 10);
    im72off.src = './assets/images/simulador/Eletros/abajuroff.png';
    im61on = new Image(2, 15);
    im61on.src = './assets/images/simulador/Eletros/luzon.png';
    im61off = new Image(2, 15);
    im61off.src = './assets/images/simulador/Eletros/luzoff.png';
    im62off = new Image(10, 6);
    im62off.src = './assets/images/simulador/Eletros/chuveirooff.png';
    im91on = new Image(2, 15);
    im91on.src = './assets/images/simulador/Eletros/luzon.png';
    im91off = new Image(2, 15);
    im91off.src = './assets/images/simulador/Eletros/luzoff.png';
    im92off = new Image(10, 6);
    im92off.src = './assets/images/simulador/Eletros/chuveirooff.png';
    im11on = new Image(2, 15);
    im11on.src = './assets/images/simulador/Eletros/luzon.png';
    im11off = new Image(2, 15);
    im11off.src = './assets/images/simulador/Eletros/luzoff.png';
    im12on = new Image(5, 10);
    im12on.src = './assets/images/simulador/Eletros/abajuron.png';
    im12off = new Image(5, 10);
    im12off.src = './assets/images/simulador/Eletros/abajuroff.png';
    im13on = new Image(12, 11);
    im13on.src = './assets/images/simulador/Eletros/computadoron.png';
    im13off = new Image(12, 11);
    im13off.src = './assets/images/simulador/Eletros/computadoroff.png';
    im81on = new Image(2, 15);
    im81on.src = './assets/images/simulador/Eletros/luzon.png';
    im81off = new Image(2, 15);
    im81off.src = './assets/images/simulador/Eletros/luzoff.png';
    ;
    $('.load').css('display', 'none');
    $('.configToConfig').children().css('width', '33%');
    resize();
    zero();
}


let comodos = ['Escritorio', 'Cozinha', 'Lavanderia', 'Quarto', 'Sala', 'Banheiro', 'Quarto2', 'Quarto3', 'Banheiro1'];


let grandezas = ['qtd', 'wat', 'dia', 'hrs'];


function preencheObjeto(objeto, caminhoChave, valor) {
	ultimoIndiceChave = caminhoChave.length-1;
	for (let iterador = 0; iterador < ultimoIndiceChave; ++ iterador) {
		const chave = caminhoChave[iterador];
		if (!(chave in objeto)){
			objeto[chave] = {}
		}
		const objeto = objeto[chave];
	}
	objeto[caminhoChave[ultimoIndiceChave]] = valor;
}



let eletro1 = {};

preencheObjeto(eletro1, ['Sala'], ['luz','tv','game','dvd','som','climatizador']);
preencheObjeto(eletro1, ['Cozinha'], ['luz','geladeira', 'microondas','forno','coifa']);
preencheObjeto(eletro1, ['Lavanderia'], ['luz', 'mqlavar', 'mqsecar']);
preencheObjeto(eletro1, ['Quarto'], ['luz', 'tv','climatizador']);
preencheObjeto(eletro1, ['Quarto2'], ['luz','abajur']);
preencheObjeto(eletro1, ['Banheiro'], ['luz','chuveiro']);
preencheObjeto(eletro1, ['Banheiro1'], ['luz','chuveiro']);
preencheObjeto(eletro1, ['Escritorio'], ['luz','abajur','computador']);
preencheObjeto(eletro1, ['Quarto3'], ['luz']);

preencheObjeto(eletro1, ['Sala', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 8,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 8,
    total: 0,
    completo: 'Lâmpada'
});
preencheObjeto(eletro1, ['Sala', 'tv'], {
    status: 0,
    dqtd: 1,
    dwat: 135,
    ddia: 30,
    dhrs: 4,
    aqtd: 1,
    awat: 135,
    adia: 30,
    ahrs: 4,
    total: 0,
    completo: 'Televisão'
});
preencheObjeto(eletro1, ['Sala', 'game'], {
    status: 0,
    dqtd: 1,
    dwat: 12,
    ddia: 8,
    dhrs: 3,
    aqtd: 1,
    awat: 12,
    adia: 8,
    ahrs: 3,
    total: 0,
    completo: 'Videogame'
});
preencheObjeto(eletro1, ['Sala', 'dvd'], {
    status: 0,
    dqtd: 1,
    dwat: 12,
    ddia: 10,
    dhrs: 2,
    aqtd: 1,
    awat: 12,
    adia: 10,
    ahrs: 2,
    total: 0,
    completo: 'Aparelho de DVD'
});

preencheObjeto(eletro1, ['Sala', 'som'], {
    status: 0,
    dqtd: 1,
    dwat: 80,
    ddia: 5,
    dhrs: 4,
    aqtd: 1,
    awat: 80,
    adia: 5,
    ahrs: 4,
    total: 0,
    completo: 'Aparelho de Som'
});

preencheObjeto(eletro1, ['Sala', 'climatizador'], {
    status: 0,
    dqtd: 1,
    dwat: 1096,
    ddia: 20,
    dhrs: 2,
    aqtd: 1,
    awat: 1096,
    adia: 20,
    ahrs: 2,
    total: 0,
    completo: 'Climatizador'
});

preencheObjeto(eletro1, ['Sala', 'total'], 0);

preencheObjeto(eletro1, ['Sala', 'totalwatts'], 0);


preencheObjeto(eletro1, ['Cozinha', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 8,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 8,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Cozinha', 'geladeira'], {
    status: 0,
    dqtd: 1,
    dwat: 5000,
    ddia: 3,
    dhrs: 4,
    aqtd: 1,
    awat: 5000,
    adia: 3,
    ahrs: 4,
    total: 0,
    completo: 'Geladeira'
});

preencheObjeto(eletro1, ['Cozinha', 'microondas'], {
    status: 0,
    dqtd: 1,
    dwat: 1000,
    ddia: 30,
    dhrs: 0.2,
    aqtd: 1,
    awat: 1000,
    adia: 30,
    ahrs: 0.2,
    total: 0,
    completo: 'Microondas'
});

preencheObjeto(eletro1, ['Cozinha', 'forno'], {
    status: 0,
    dqtd: 1,
    dwat: 1500,
    ddia: 9,
    dhrs: 2,
    aqtd: 1,
    awat: 1500,
    adia: 9,
    ahrs: 2,
    total: 0,
    completo: 'Forno Elétrico'
});

preencheObjeto(eletro1, ['Cozinha', 'coifa'], {
    status: 0,
    dqtd: 1,
    dwat: 410,
    ddia: 20,
    dhrs: 2,
    aqtd: 1,
    awat: 410,
    adia: 20,
    ahrs: 2,
    total: 0,
    completo: 'Coifa'
});

preencheObjeto(eletro1, ['Cozinha', 'total'], 0);

preencheObjeto(eletro1, ['Cozinha', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Lavanderia', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 5,
    dhrs: 1,
    aqtd: 1,
    awat: 25,
    adia: 5,
    ahrs: 1,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Lavanderia', 'mqlavar'], {
    status: 0,
    dqtd: 1,
    dwat: 1350,
    ddia: 3,
    dhrs: 4,
    aqtd: 1,
    awat: 1350,
    adia: 3,
    ahrs: 4,
    total: 0,
    completo: 'Máquina de lavar roupas'
});

preencheObjeto(eletro1, ['Lavanderia', 'mqsecar'], {
    status: 0,
    dqtd: 1,
    dwat: 1600,
    ddia: 3,
    dhrs: 4,
    aqtd: 1,
    awat: 1600,
    adia: 3,
    ahrs: 4,
    total: 0,
    completo: 'Máquina de secar roupas'
});

preencheObjeto(eletro1, ['Lavanderia', 'total'], 0);

preencheObjeto(eletro1, ['Lavanderia', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Quarto', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 7,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 7,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Quarto', 'tv'], {
    status: 0,
    dqtd: 1,
    dwat: 85,
    ddia: 25,
    dhrs: 4,
    aqtd: 1,
    awat: 85,
    adia: 25,
    ahrs: 4,
    total: 0,
    completo: 'Televisão'
});

preencheObjeto(eletro1, ['Quarto', 'climatizador'], {
    status: 0,
    dqtd: 1,
    dwat: 822,
    ddia: 20,
    dhrs: 2,
    aqtd: 1,
    awat: 822,
    adia: 20,
    ahrs: 2,
    total: 0,
    completo: 'Climatizador'
});

preencheObjeto(eletro1, ['Quarto', 'total'], 0);

preencheObjeto(eletro1, ['Quarto', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Quarto2', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 5,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 5,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Quarto2', 'abajur'], {
    status: 0,
    dqtd: 1,
    dwat: 2,
    ddia: 3,
    dhrs: 4,
    aqtd: 1,
    awat: 2,
    adia: 3,
    ahrs: 4,
    total: 0,
    completo: 'Abajur'
});

preencheObjeto(eletro1, ['Quarto2', 'total'], 0);

preencheObjeto(eletro1, ['Quarto2', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Banheiro', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 2,
    ddia: 3,
    dhrs: 4,
    aqtd: 1,
    awat: 2,
    adia: 3,
    ahrs: 4,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Banheiro', 'chuveiro'], {
    status: 0,
    dqtd: 1,
    dwat: 7000,
    ddia: 30,
    dhrs: 0.5,
    aqtd: 1,
    awat: 7000,
    adia: 30,
    ahrs: 0.5,
    total: 0,
    completo: 'Chuveiro'
});

preencheObjeto(eletro1, ['Banheiro', 'total'], 0);

preencheObjeto(eletro1, ['Banheiro', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Banheiro1', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 4,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 4,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Banheiro1', 'chuveiro'], {
    status: 0,
    dqtd: 1,
    dwat: 7000,
    ddia: 30,
    dhrs: 0.5,
    aqtd: 1,
    awat: 7000,
    adia: 30,
    ahrs: 5,
    total: 0,
    completo: 'Chuveiro'
});

preencheObjeto(eletro1, ['Banheiro1', 'total'], 0);

preencheObjeto(eletro1, ['Banheiro1', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Escritorio', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 4,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 4,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Escritorio', 'abajur'], {
    status: 0,
    dqtd: 1,
    dwat: 2,
    ddia: 3,
    dhrs: 4,
    aqtd: 1,
    awat: 2,
    adia: 3,
    ahrs: 4,
    total: 0,
    completo: 'Abajur'
});

preencheObjeto(eletro1, ['Escritorio', 'computador'], {
    status: 0,
    dqtd: 1,
    dwat: 200,
    ddia: 20,
    dhrs: 5,
    aqtd: 1,
    awat: 200,
    adia: 20,
    ahrs: 5,
    total: 0,
    completo: 'Computador (DESKTOP)'
});

preencheObjeto(eletro1, ['Escritorio', 'total'], 0);

preencheObjeto(eletro1, ['Escritorio', 'totalwatts'], 0);

preencheObjeto(eletro1, ['Quarto3', 'luz'], {
    status: 0,
    dqtd: 1,
    dwat: 25,
    ddia: 30,
    dhrs: 7,
    aqtd: 1,
    awat: 25,
    adia: 30,
    ahrs: 7,
    total: 0,
    completo: 'Lâmpada'
});

preencheObjeto(eletro1, ['Quarto3', 'total'], 0);

preencheObjeto(eletro1, ['Quarto3', 'totalwatts'], 0);



var comod;
var eletr;
var total;
var totalwatts;


var taxa;



function aumentar(a, b) {
    $('#' + a).css({
        'top': '0%',
        'left': '0%',
        'width': '100%',
        'height': '100%'
    })
       
        oall();
        mudarDisplayElemento(`#${a}`,'');
        comod = b;
    }


function mudarDisplayElemento(elementoSelecionado, tipoDeDisplay) {
    const elemento = document.querySelector(elementoSelecionado);
    elemento.style.display = tipoDeDisplay;
}

function oall() {
    for (let iterador = 1; iterador <= $('.comodo').length; iterador++) {
        mudarDisplayElemento(`#${b}`,'none');;
    }
    mudarDisplayElemento('.transparente','none');
}

// Função não é utilizada em nenhum lugar
function mthi(b) {
    $('#' + b).css('display', '');
}

function minimizarTudo() {
    mudarDisplayElemento('.comodo', '');
    mudarDisplayElemento('.transparente', '');
}



function reduzir(idiv, top, left) {
    $('#' + idiv).css({
        'top': top + '%',
        'left': left + '%',
        'width': '50%',
        'height': '50%'
    });
}

function switchAparelho(aparelho, comodo, status) {
    
    switch (aparelho) {
        case 'luz':
            mudarDisplayElemento(`#${comodo}foco`, `${status ? '' : 'none'}`);
            break;

        case 'tv': {
            if (browser == "Chrome" || browser == "Safari") {
                $('#' + comodo + aparelho).css('background-image',
                    "url(./assets/images/simulador/Efeitos/" + aparelho + "on.gif)");
            } else {
                $('#' + comodo + aparelho).attr('src', "./assets/images/simulador/Efeitos/" + aparelho + "on.gif");
            }
            break;
        }
        
        case 'climatizador': {
            mudarDisplayElemento(`#${comodo}${aparelho}ar`, `${status ? 'none' : ''}`);
            break;
        }
        case 'chuveiro': {
            mudarDisplayElemento(`#${comodo}${aparelho}pingo`, `${status ? 'none' : ''}`);
            break;
        }
        case 'abajur': {
            mudarDisplayElemento(`#${comodo}${aparelho}abajur`, `${status ? 'none' : ''}`);
            break;
        }
        case 'som': {
            mudarDisplayElemento(`#${comodo}${aparelho}notas`, `${status ? 'none' : ''}`);
            break;
            }
            
    }
    mudarDisplayElemento(`#${comodo}${aparelho}avc`, `${status? 'none':''}`);
    mudarDisplayElemento(`#${comodo}${aparelho}avc1`, `${status? 'none':''}`);
}

function ligar(comodo, aparelho) {
    let objetoAparelho = eletro[comodo][aparelho];
    if (objetoAparelho['status'] == 0) {
        if (aparelho != "tv") {
            if (browser == "Chrome" || browser == "Safari") {
                $('#' + comodo + aparelho).css('background-image',
                    "url(./assets/images/simulador/Eletros/" + aparelho + "on" + extension + ")");
            } else {
                if (aparelho != "chuveiro" || aparelho != "coifa") {
                    $('#' + comodo+ aparelho)
                        .attr('src', "./assets/images/simulador/Eletros/" + aparelho + "on" + extension);
                }
            }
        } 
        
        switchAparelho(aparelho, comodo, objetoAparelho['status']);
        
        objetoAparelho['status'] = 1;
    } else {
        if (aparelho != "chuveiro" || aparelho != "coifa"){
            if (browser == "Chrome" || browser == "Safari") {
                $('#' + comodo + aparelho).css('background-image',
                    "url(./assets/images/simulador/Eletros/" + aparelho + "off" + extension + ")");
            } else {
                $('#' + comodo + aparelho).attr('src', "./assets/images/simulador/Eletros/" + aparelho + "off" + extension);
            }
        }
        switchAparelho(aparelho, comodo, objetoAparelho['status']);

        objetoAparelho['status'] = 0;
    }
    calcular(comodo, aparelho);
}

function calcular(comodo, aparelho) {
    objetoAparelho = eletro[comodo][aparelho];
    objetoAparelho['total'] = objetoAparelho['aqtd'] * objetoAparelho['awat'] * objetoAparelho['adia'] * objetoAparelho['ahrs'] * objetoAparelho['status'] /
        1000;
    eletro[comodo]['total'] = 0;
    for (const chaveAparelho in eletro[comodo]) {
        eletro[comodo]['total'] += eletro[comodo][chaveAparelho]['total'];
    }
    total = 0;
    for (const chaveComodo in eletro) {
        total += eletro[chaveComodo]['total'];
    }
    $('#watts').attr('value', (total).toFixed(2));
    if ($('#watts').attr('value') < 50) {
        taxa = 0.39024 / (0.8735);
        $('#taxinha').attr('value', '0.39024 / (0.8735)');
    } else {
        taxa = 0.39024 / (0.7435);
        $('#taxinha').attr('value', '0.39024 / (0.7435)');
    }
    $('#result').attr('value', (total * taxa).toFixed(2));
    listview();
}

function fechar() {
    mudarDisplayElemento('.toConfig', 'none');

}

function fechar1() {
    mudarDisplayElemento('#mydiv', 'none');

}

function trocar() {
    torf = true;
    for (let iterador = 0; iterador <= 3; iterador++) {
        if ($('#n' + grandezas[iterador]).attr('value') <= 0 ||
            $('#n' + grandezas[iterador]).attr('value') == '') {
            alert('O valor ' + grandezas[iterador] + ' não pode ser Negativo ou Nulo');
            $('#n' + grandezas[iterador]).attr('value', '');
            torf = false;
        }
    }
    if (document.getElementById('ndia').value > 30) {
        alert('Dias não podem ultrapassar 30;')
        document.getElementById('ndia').value = '';
        torf = false;
    }
    if (document.getElementById('nhrs').value > 24) {
        alert('Horas não podem ultrapassar 24;')
        document.getElementById('nhrs').value = '';
        torf = false;
    }
    if (torf != false) {
        for (let iterador = 0; iterador <= 3; iterador++) {
            eletro[comod][eletr][('a' + grandezas[iterador])] = document
                .getElementById(('n' + grandezas[iterador])).value
        }
        limpar();
        calcular(comod, eletr);
        mudarDisplayElemento('.toConfig', 'none');
    }
}

function def() {
    for (iterador = 0; iterador <= 3; iterador++) {
        $('#n' + grandezas[iterador]).attr('value',
            parseFloat(eletro[comod][eletr][('d' + grandezas[iterador])]));
    }
}

function limpar() {
    for (let iterador = 0; iterador <= 3; iterador++) {
        document.getElementById(('n' + grandezas[iterador])).value = ''
    }
}

function click1() {
    for (iterador = 0; iterador <= 3; iterador++) {
        $('#a' + grandezas[iterador]).attr('value', eletro[comod][eletr][('a' + grandezas[iterador])]);
    }
    $('.toConfig').css('display', '');
}

function resize() {
    $('body').css('height', '100%');
    $('body').css('width', '100%');
    if ($('body').width() < 1092) {
        $('.center').css('width', '1092px');
        $('.center').css('left', '40px');
    } else {
        $('.center').css('width', '90%');
        $('.center').css('left', '5%');
    }
    if ($('body').height() < 537) {
        $('.center').css('height', '537px');
        $('.center').css('top', '50px');
    } else {
        $('.center').css('height', '90%');
        $('.center').css('top', '8%');
    }
    if (browser == 'Safari' || browser == 'Firefox') {
        $('input').css('height', '20px')
        $('input[type=button]').css('height', '40px')
    }

}


function zero() {
    $('watts').attr('value', '0');
    $('result').attr('value', '0.00');
    listview();
}

function listview() {
    $('.listview').children('table').children().remove();
    $('.listview')
        .children('table')
        .append(
            "<tr><td>Comodo</td> <td style='text-align: center;'>Eletrodoméstico</td> <td style='text-align: center;'>Valor R$</td></tr>")
    for (let iterador = 0; iterador < comodo.length; iterador++) {
        const a = comodo[iterador];
        for (let iteradorAuxiliar = 0; iteradorAuxiliar < eletro[a].length; iteradorAuxiliar++) {
            const b = eletro[a][iteradorAuxiliar];
            if (eletro[a][b]['status'] == 1)
                $('.listview').children('table').append(
                    "<tr ><td>" + a + "</td> <td>" + eletro[a][b]['completo'] +
                    "</td> <td style='text-align: right;'>" +
                    (eletro[a][b]['total'] * taxa).toFixed(2) +
                    "</td></tr>");
        }
    }
    $('.listview').children('table').css('width', '100%');
    $('.listview').children('table').children().children('tr').css('width',
        '100%');
    $('.listview').children('table').children().children('tr').children('td')
        .css('width', '33%');
}

function imprimir() {
    novaJanela = window
        .open(
            '',
            '',
            'status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'
        );
        novaJanela.document.write(`
            <head>
            <meta http-equiv='content-type' content='text/html; charset=iso-8859-1' />
            <style tyle='text/css' media='print'>button{display: none;}</style>
            <style tyle='text/css' media='all'>a{color: #0000FF;}</style>
            </head>
            <body>
                <table>
                    <tbody>
                        <tr><td>Comodo</td> <td style='text-align: center;'>Eletrodoméstico</td> <td style='text-align: center;'>Valor R$</td></tr>
        
        `);
    for (iterador = 0; iterador < comodo.length; iterador++) {
       const a = comodo[iterador];
        for (iteradorAuxiliar = 0; iteradorAuxiliar < eletro[a].length; iteradorAuxiliar++) {
           const b = eletro[a][iteradorAuxiliar];
            if (eletro[a][b]['status'] == 1)
                novaJanela.document.write("<tr><td>" + a + "</td> <td>" + b +
                    "</td> <td style='text-align: right;'>" +
                    (eletro[a][b]['total'] * taxa).toFixed(2) +
                    "</td></tr>");
        }
    }
    novaJanela.document.write(`
                </tbody>
            </table>
        <button type='button' onclick='javascript:window.print();'>Imprimir Página</button>
        </body>
    `);
    return false;
}