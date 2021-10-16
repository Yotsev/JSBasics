function convertor(inputData) {
    let usdPrice = 1.79549;
    let usd = Number(inputData[0]);
    let bgn = usd*usdPrice;

    console.log(bgn);
}
convertor(["22"])