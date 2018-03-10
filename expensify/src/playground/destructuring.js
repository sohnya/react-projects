// console.log('Hey ho')

// const person = {
//   name: 'Sonja',
//   age: 32,
//   location: {
//     city: 'Montreal',
//     temperature: 0
//   }
// };

// // const name = person.name
// // const age = person.age
// const { name, age } = person;

// console.log(`${name} is ${age}`);

// // Without destructuring
// if (person.location.city && person.location.temperature) {
//   console.log(`It's ${person.location.temperature} 
//               degrees in ${person.location.city}`)
// }
// // Destructuring with renaming syntax
// const { city, temperature: temp } = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} degrees in ${city}`)
// }

// // Setting default values
// const anonymous = {
//   age: 32,
//   location: {
//     city: 'Montreal',
//     temperature: 0
//   }
// };
// const { name1 = 'Anonymous', age: age1 } = anonymous;
// console.log(`${name1} is ${age1}`);

// // Set default AND change variable name
// const { name: firstName = 'Anonymous', age: age2 } = anonymous;
// console.log(`${firstName} is ${age2}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: "Ryan Holiday",
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName)

///////
// Array destructuring.
///////

// const address = ['1299 South Juniper Street', 'Philadelphia', 'PA', '19147']
// const [, city, state,] = address;
// console.log(`You are in ${city}, ${state}`)

// // Defaults
// const newAddress = []
// const [, , state2 = 'New York',] = newAddress;
// console.log(`You are in ${state2}`)

// // Challenge
// const item = ['coffee (hot)', '$3', '$4', '$5']
// const [description, , mediumPrice] = item;
// console.log(`A medium ${description} costs ${mediumPrice}`)