function calculo() {

    var peso   = document.querySelector(".peso").value*1;
    var altura = document.querySelector(".altura").value*1;

    var alturaM = (altura / 100)
    var imc = ((peso / (alturaM * alturaM)))

    var imc1d = parseFloat(imc).toFixed(1);
    
    var classificacao = ""
    
        switch(true) {
            case (imc1d < 18.5): classificacao = ("Abaixo do peso");
                break;
            case (imc1d >= 18.5 && imc1d < 25.0): classificacao = ("Peso ideal (parabéns)");
                break;
            case (imc1d >= 25.0 && imc1d < 30.0): classificacao = ("Levemente acima do peso");
                break;
            case (imc1d >= 30.0 && imc1d < 35.0): classificacao = ("Obesidade grau I");
                break;
            case (imc1d >= 35.0 && imc1d < 40.0): classificacao = ("Obesidade grau II (severa)");
                break;
            case (imc1d >= 40.0): classificacao = ("Obesidade grau III (mórbida)");
                break;
    }

    document.querySelector(".resultadoIMC").innerHTML = imc;
    document.querySelector(".classificacaoIMC").innerHTML = classificacao;
}
/*function calculo() {
    peso      = document.getElementById('peso')
    altura    = document.getElementById('altura')

    alturaM = altura.value / 100
    const imc = (peso.value / (altura.value * altura.value))
        
    if(imc < 17.0){
        classificacao = 'Muito abaixo do peso';}
    else if(imc >= 17.0 && imc < 18.5){
        classificacao = 'Abaixo do peso';}
    else if(imc >= 18.5 && imc < 25.0){
        classificacao = 'Peso ideal';}
    else if(imc >= 25.0 && imc < 30.0){
        classificacao = 'Acima do peso';}   
    else if(imc >= 30.0 && imc < 35.0){
        classificacao = 'Obesidade Nível I';}
    else if(imc >= 35.0 && imc < 40.0){
        classificacao = 'Obesidade Nível II';}
    else{
        classificacao = 'Obesidade Nível III';}

    return classificacao;

    document.getElementById('resultadoIMC').innerHTML = imc;
    document.getElementById('classificacaoIMC').innerHTML = classificacao;
    alert(imc)
    } */
