// 1) Importação da classe 'Calculadora'
const Calculadora = require('./calculadora')

// 2) Criar um objeto que herde
// a classe 'Calculadora'
const calc = new Calculadora()

// 3) Escrita do teste do
// método 'soma'
it('Deve somar dois números', ()=>{
    expect(calc.soma(10, 10)).toBe(20)
})

it('Deve somar dois números', ()=>{
    expect(calc.soma(45, 54)).toBe(99)
})

// 3) Escrita do teste do
// método 'subtracao'
it('Deve subtrair dois números', ()=>{
    expect(calc.subtracao(10, 10)).toBe(0)
})

// 4) Escrita do teste do
// método 'multiplicacao'
it('Deve multiplicar dois números', ()=>{
    expect(calc.multiplicacao(10, 10)).toBe(100)
})

it('Deve multiplicar dois números', ()=>{
    expect(calc.multiplicacao(80, 20)).toBe(1600)
})

// 5) Escrita do teste do
// método 'divisao'
it('Deve dividir dois números', ()=>{
    expect(calc.divisao(10, 10)).toBe(1)
})

it('Deve dividir dois números', ()=>{
    expect(calc.divisao(5, 10)).toBe(0.5)
})

// it('Deve testar uma divisão por zero', ()=>{
//     expect(calc.divisao(8, 0)).toBe(5)
// })

// Teste com a solução alternativa
// do método 'divisao'
it('Deve testar uma divisão por zero', ()=>{
    expect(()=>{
        calc.divisao(8, 0)
    }).toThrow()
})