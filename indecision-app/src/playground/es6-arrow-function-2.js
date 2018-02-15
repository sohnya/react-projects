// arguments object - no longer bound with arrow functions

// Explicitly define argument list, have access to arguments 
//const add = function (a, b) {
//    console.log(arguments);
//    return a + b;
//};

const add = (a,b) => {
    // console.log(arguments) // Will give ReferenceError
    a + b;
}

console.log(add(55,1,5));

// this keyword - no longer bound with arrow functions

// Create object
const user = {
  name : 'Sonja',
  cities : ['Kangaslampi','Upplands Vasby','Shanghai',
  'Kista','Kunming','Sollentuna','Kungshamra','Paris',
  'St. Petersburg','Montreal'],
  
  // printPlacesLived : function() { // Below is the same as this.
  printPlacesLived() {

    console.log(this.cities);
    
    return this.cities.map( (city) => this.name + ' has lived in ' + city);
    
    // The this.name is not accessible for an anonymous function!
    //this.cities.forEach(function(city) {
    //    console.log(this.name, ' has lived in ',city)
    //});
    // But it is accessible for the arrow function.
    // this.cities.forEach ( city => {
    //    console.log(this.name, ' has lived in ',city);
    // });
  }
}

console.log(user.printPlacesLived())

// Challenge area
const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 2,
    multiply() {
        return this.numbers.map ( number => number * this.multiplyBy );
    }
}

console.log(multiplier.multiply())