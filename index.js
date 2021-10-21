// ## 1 - Push sans push


// let fruits = ['Apple','Orange','Banana']

// fruits= [...fruits,"Raspberry"]

// console.log(fruits)

// ## 2- Unshift sans unshift

// Créer la variable suivante:

// ```jsx
// 
// ```

//2 - unshift
let fruits = ['Apple','Orange','Banana']
fruits= ["Raspberry",fruits]
console.log(fruits)

//## 3 - Array concatenation
const arr1=['A', 'B', 'C']
const arr2=['X', 'Y', 'Z']

let arr3 = [...arr1,...arr2]
console.log(arr3)

// ## 4 - Objects

const user = {
      age: 10,
      eyes: "vert",
      legs: 2,
      arms: 2,
      hair: "long",
      caracterstique: "gras du bide",
      nose: "petit nez",
      ears: "grandes oreilles",
      glasses: true,
      sosie: "sarkozy"
    }
 const bobby = {
     ...user,
     firstName: "bobby"
 }  
console.log(bobby)

// 5 - forEach

const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(number => {
    console.log(number)
})

// ## 6 - filter

// Créer la constante suivante:

// ```jsx
// const numbers = [1, 2, 3, 4, 5, 6]
// ```

// Avec la notation es6, créer un nouveau tableau contenant seulement les nombres impairs

const numbers2 = [1, 2, 3, 4, 5, 6]
const odd =  numbers2.filter(odd => odd %2 !=0 )
console.log(odd)

// ## 7 - map
const numbers3 = [1, 2, 3, 4, 5, 6]
const square = numbers3.map(sqr => sqr**2)
console.log(square)