function sequence(inputData){

    let targetNumber = Number(inputData[0]);

    let index = 1;


    while (index<= targetNumber) {
        console.log(index);
        index = index*2+1;
    }
}

sequence(["17"])