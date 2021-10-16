function repaint(inputData) {

    let plasticPrice = 1.50;
    let paintPrice = 14.50;
    let detergentPrice = 5.00;

    let neededPlastic = Number(inputData[0]);
    let totalNeededPlastic = neededPlastic + 2;
    let neededPaint = Number(inputData[1]);
    let totalNeededPaint = neededPaint + neededPaint * 0.1;
    let neededDetergent = Number(inputData[2]);
    let hours = Number(inputData[3]);
    let plasicBags = 0.40;

    let materialsPrice = totalNeededPlastic * plasticPrice + totalNeededPaint * paintPrice + neededDetergent * detergentPrice + plasicBags;
    let totalPriceForWork = materialsPrice * 0.30 * hours;
    let tottalPrice = materialsPrice + totalPriceForWork;
    
    console.log(tottalPrice);
}
repaint(["10 ", "11 ", "4 ", "8 "])