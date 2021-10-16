function supplies(inputData) {

    let pricePerPackOfPens = 5.80;
    let pricePerPackOfMarkers = 7.20;
    let priceOfDetergentPerLiter = 1.20;

    let packsOfPens = Number(inputData[0]);
    let packsOfMarkers = Number(inputData[1]);
    let litersOfDetergent = Number(inputData[2]);
    let discountPercent = Number(inputData[3]) / 100;

    let totalPrice = packsOfPens * pricePerPackOfPens + packsOfMarkers * pricePerPackOfMarkers + litersOfDetergent * priceOfDetergentPerLiter;
    let finalPrice = totalPrice - totalPrice * discountPercent;
    
    console.log(finalPrice);
}
supplies(["2 ", "3 ", "4 ", "25 "])