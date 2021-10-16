function greeningProject(inputData) {
    let sqrtMeterPrice = 7.61;
    let discout = 18;
    let yardArea = Number(inputData[0]);

    let totalPrice = sqrtMeterPrice * yardArea;
    let discountPrice = totalPrice * discout;

    console.log(`The final price is: ${totalPrice-discountPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}
greeningProject(["550"])