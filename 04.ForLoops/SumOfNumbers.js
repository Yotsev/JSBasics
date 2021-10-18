function sum(inputData){
    
    let sum = 0;

    for (let index = 0; index < inputData[0].length; index++) {
       
        sum+= Number(inputData[0][index]);
    }

    console.log(`The sum of the digits is:${sum}`);
}
sum(["1234"])