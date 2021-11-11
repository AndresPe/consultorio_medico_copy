const { it, expect} = require('@jest/globals');
// const CalculadoraDeArea = require('../exampleCalculator');
const buscar = require('../src/controllers/quotesControllers');


describe('Encontrar usuario paciente', () => {
    const findPacient = new buscar();
    it('Consulta el paciente en la base de datos, debe retornar la información del paciente con id 111', () => {
        const rows = findPacient.findPacient(111);
        expect(rows.name).toBe('nombre');
    });
}); 
/**
 * Esta pequeña prueba funciona, sin embargo, no supe realizar la prueba
 * para que obtuviera datos directamente de la base de datos
 * todo quotesControllers está comentada y solo dejé una clase
 * la cual permite hacer una prueba quemada.
 * Es necesario encontrar la forma de realizar la prueba llamando las rutas (routes)
*/

// describe('calculador de areas',  () => {
//     const calculadorDeArea = new CalculadoraDeArea();
//     it('Calcular el area de un cuadrado de 5x5 debe dar como resultado 25', () => {
//         const resultado = calculadorDeArea.calcularAreaCuadrado(5);
//         expect(resultado).toBe(25);
//     });
// });