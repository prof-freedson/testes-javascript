class CalculadoraIMC{
    // cálculo do valor do imc
    // imc = peso / (altura * altura)

    // método calcular()
    calcular(peso, altura){
        // calcular o valor
        // do IMC com a variável/constante
        // chamada 'imc'
        const imc = peso / (altura * altura)

        // verificando a faixa
        // de valores e determinando
        // cada resultado
        if(imc < 19){
            return "Magreza"
        }
        else if(imc >= 19 && imc < 24){
            return "Normal"
        }
        else if(imc >= 24 && imc < 29){
            return "Sobrepeso"
        }
        else{
            return "Obesidade"
        }

    }
}

// exportando a classe
module.exports = CalculadoraIMC

// Desafio:

// a) criar o método valorIMC
// para receber o valor do
// cálculo do IMC

// b) criar o método resultadoIMC
// para verificar as faixas de resultado
// (magreza, normal, sobrepeso e obesidade)