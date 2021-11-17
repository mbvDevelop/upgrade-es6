// Iteración 4
 
// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [
 {id: 1, name: 'Abel'},
 {id:2, name: 'Julia'},
 {id:3, name: 'Pedro'},
 {id:4, name: 'Amanda'}
];
 
let usersNames = users.map(user => user.name)
console.log(usersNames)
 
// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users1 = [
 {id: 1, name: 'Abel'},
 {id:2, name: 'Julia'},
 {id:3, name: 'Pedro'},
 {id:4, name: 'Amanda'}
];
let usersNames1 = users1.map(function(user) {
  if (user.name.charAt(0) == ('a') || user.name.charAt(0) == "A"){
    return "Anacleto"
  }
  return user.name
})
console.log(usersNames1)
// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
 {isVisited:true, name: 'Tokyo'}, 
 {isVisited:false, name: 'Madagascar'},
 {isVisited:true, name: 'Amsterdam'}, 
 {isVisited:false, name: 'Seul'}
];
 
let cities2 = cities.map(function(city) {
  if (city.isVisited) {
    return city.name + "(Visitado)"
  }
  return city.name
})
 
console.log(cities2)