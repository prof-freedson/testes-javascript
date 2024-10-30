const CalculadoraIMC = require('./calculadoraIMC')

const calcIMC = new CalculadoraIMC()

it('Deve acusar o resultado "Magreza"', ()=>{
   expect(calcIMC.calcular(55, 1.80)).toBe("Magreza") 
})

/* it('Deve acusar outro resultado "Magreza"', ()=>{
   expect(calcIMC.calcular(95, 1.80)).toBe("Magreza") 
}) */

it('Deve acusar o resultado "Normal"', ()=>{
    expect(calcIMC.calcular(70, 1.80)).toBe("Normal") 
})

it('Deve acusar o resultado "Sobrepeso"', ()=>{
    expect(calcIMC.calcular(85, 1.80)).toBe("Sobrepeso") 
})

it('Deve acusar o resultado "Obesidade"', ()=>{
    expect(calcIMC.calcular(95, 1.80)).toBe("Obesidade") 
})