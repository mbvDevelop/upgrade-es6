// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
let array = [ ...pointsList]
 
// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy2 = { ...toy}
 
// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
let array2 = [...pointsList1, ...pointsList2] 
 
// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toyT = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyTUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
let toyTUpdated = {...toyT, ...toyTUpdate}
 
// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let index = colors.length;
let colorsS = [...colors.slice(0, 1), ...colors.slice(2)];
console.log(colorsS)