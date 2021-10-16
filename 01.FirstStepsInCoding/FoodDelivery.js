function delivery(inputData) {
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegetarianMenu = 8.15;

    let numberOfChickenMeus = Number(inputData[0]);
    let numberOfFishMeus = Number(inputData[1]);
    let numberOfVegetarianMeus = Number(inputData[2]);

    let orderPrice = numberOfChickenMeus * chickenMenu + numberOfFishMeus * fishMenu + numberOfVegetarianMeus * vegetarianMenu;
    let dessertPrice = orderPrice * 0.2;
    let deliveryPrice = 2.50;

    let totalPrice = orderPrice + dessertPrice + deliveryPrice;

    console.log(totalPrice);

}
delivery(["2 ", "4 ", "3 "])