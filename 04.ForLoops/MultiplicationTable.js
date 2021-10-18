function multiplication(inputData){

    let number = Number(inputData[0]);

    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * ${number} = ${index*number}`);
    }
}