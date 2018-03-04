const square = function(x){
  return x*x;
};

// es5 function
//const squareArrow = (x) => { 
//    return x * x;
//}

// Arrow function that only returns a single expression
const squareArrow = (x) =>  x * x ;

console.log(squareArrow(4));

// arrow function getFirstName
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Sonja Hiltunen'));
