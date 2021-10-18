function priceOfFlowers(inputData){
    
    let roses = 5;
    let dahlias = 3.80;
    let tulips = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50;

    let flowerType = inputData[0];
    let numberOfFlowers = Number(inputData[1]);
    let budget = Number(inputData[2]);

    let price;

    switch (flowerType) {
        case 'Roses': price = roses; break;
        case 'Dahlias': price = dahlias; break;  
        case 'Tulips': price = tulips; break;  
        case 'Narcissus': price = narcissus; break;
        case 'Gladiolus': price = gladiolus; break;
    }

    let totalPrice = price * numberOfFlowers;

    if (numberOfFlowers>80 && flowerType === 'Roses') {
        totalPrice -= totalPrice*0.10;
    }else if (numberOfFlowers>90&& flowerType === 'Dahlias') {
        totalPrice -= totalPrice*0.15;
    }else if (numberOfFlowers>80 && flowerType === 'Tulips') {
        totalPrice -= totalPrice*0.15;
    }else if (numberOfFlowers<120 && flowerType === 'Narcissus') {
        totalPrice += totalPrice*0.15;
    }else if (numberOfFlowers<80 && flowerType === 'Gladiolus') {
        totalPrice += totalPrice*0.20;
    }
    
    if (budget>= totalPrice) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
    }
}

priceOfFlowers(["Roses","55","250"])
priceOfFlowers(["Tulips","88","260"])