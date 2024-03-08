function calcular(){
    //Captura de dados do usuário
    var modeloAviao = flight_model.value;
    var modeloMotor = engine_model.value;
    var quantidadeMotrs = Number(qtd_motores.value);
    var quantidadeComp = Number(qtd_compressores.value);
    var quantidadeCamaras = Number(qtd_camaras.value);
    var quantidadepcs = Number(qtd_pcFlight.value);

    //Cálculo de gastor por peça
    var gastoCompressores = quantidadeComp * 700 * 3;
    var gastoCamaras = quantidadeCamaras * 12440 * 10;
    var gastopcs = quantidadepcs * 3732 * 10;

    //Cálculo geral e conversão para BRL
    var total = ((gastoCompressores + gastoCamaras + gastopcs) * quantidadeMotrs).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    //Conversão para string em BRL 
    var quantidadeCompRS = gastoCompressores.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
    var gastoCamarasRS = gastoCamaras.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
    var quantidadepcsRS = gastopcs.toLocaleString('pt-br',{style:'currency',currency:'BRL'});

    //Impressão de mensagem dos resultados 
    div_box.innerHTML = 
        `<div class="resultado" id="div_result">
        Sobre o avião modelo: ${modeloAviao}, e modelo de motor: ${modeloMotor}...

         O gasto aproximado com a manutenção de peças que mais causam problema devido ao superaquecimento 
         é de: ${total}. <br> Sendo que o gasto com Compressores foi de: ${quantidadeCompRS} <br>
         com Câmaras de combustão: ${gastoCamarasRS} <br> e com Computadores de controle: ${quantidadepcsRS}.</div>`;
}