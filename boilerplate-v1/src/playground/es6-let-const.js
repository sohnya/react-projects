var nameVar = "Sonja";
var nameVar = "Mike"; // Redefine is possible

console.log('nameVar ',nameVar);

let nameLet = 'Jenni';
nameLet = 'Milja';
// let nameLet = 'Elli'; // Cannot redefine!
console.log('nameLet:',nameLet);

const nameConst = 'Frank';
// const nameConst = 'Gunther'; // Cannot redefine
// nameConst = 'Gunther' // Cannot reassign
console.log('nameConst: ',nameConst)

function getPetName() {
    let petName = 'Hal';
    return petName;
}

// console.log(petName); // Function scoped

// Block scoping
const fullName = 'Sonja Hiltunen';

if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// If firstName is a let, we cannot access it outside of the scope.  
console.log(firstName);