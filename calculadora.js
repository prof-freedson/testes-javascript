// 1) Criar a classe 'Calculadora'
class Calculadora{
    
    // 2) Criar o método
    // chamado 'soma'
    soma(n1, n2){
        return n1 + n2
    }

    // 3) Criar o método
    // chamado 'subtracao'
    subtracao(n1, n2){
        return n1 - n2
    }

    // 4) Criar o método
    // chamado 'multiplicacao'
    multiplicacao(n1, n2){
        return n1 * n2
    }

    // 4) Criar o método
    // chamado 'divisao'
    divisao(n1, n2){
        if(n2 === 0){
            //return Infinity
            // Solução alternativa
            throw new Error('Divisão inválida')
        }
        return n1 / n2
    }   

}

// Exportar a classe
// para outros arquivos
module.exports = Calculadora

