function concatenation (inputData){
let firstName = inputData[0];
let lastName = inputData[1];
let age = inputData[2];
let town = inputData[3];

console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenation(['Maria', 'Ivanova', 20, 'Sofia'])