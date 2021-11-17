// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesOver18 = ages.filter(age => age > 18)
console.log(agesOver18)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const ages1Pair = ages.filter(age => age % 2 == 0)
console.log(ages1Pair)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersLeage = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends")
console.log(streamersLeage)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers1 = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersWithA = streamers1.map(streamer => streamer.name.includes("a"))

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
const streamersWTH = streamers1.filter(streamer => streamer.gameMorePlayed.includes('Legends')).map(streamer => {
  if (streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
  }
  return streamer
})
console.log(streamersWTH)
 
// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const input = document.querySelector("input")
const inputed = () =>  {
  let text = input.value
  let streamer = streamers3.filter( streamer => streamer.name.includes(text))
  console.log(streamer)
}
input.addEventListener("input", inputed)
 
// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers4 = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const input1 = document.querySelector("input")
const button = document.querySelector("button")
const inputed1 = () =>  {
  let text = input.value
  let streamer = streamers5.filter( streamer => streamer.name.includes(text))
  console.log(streamer)
}
button.addEventListener("click", inputed)