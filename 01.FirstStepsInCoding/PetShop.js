function shop(inputData) {
    let dogFood = 2.50;
    let animalFood = 4.00;

    let numberOfDogs = Number(inputData[0]);
    let numberOfAnimals = Number(inputData[1]);

    let totalPrice = numberOfDogs*dogFood + numberOfAnimals*animalFood;

    console.log(`${totalPrice} lv.`);
}
shop(["5", "4"])