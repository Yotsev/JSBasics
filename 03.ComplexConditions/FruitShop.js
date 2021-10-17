function price(inputData) {

    let fruit = inputData[0];
    let day = inputData[1];
    let quantity = Number(inputData[2]);

    let finalPrice;
    let isValid = true;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': finalPrice = 2.50 * quantity; break;
                case 'apple': finalPrice = 1.20 * quantity; break;
                case 'orange': finalPrice = 0.85 * quantity; break;
                case 'grapefruit': finalPrice = 1.45 * quantity; break;
                case 'kiwi': finalPrice = 2.70 * quantity; break;
                case 'pineapple': finalPrice = 5.50 * quantity; break;
                case 'grapes': finalPrice = 3.85 * quantity; break;
                default:
                   isValid = false;
                    break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': finalPrice = 2.70 * quantity; break;
                case 'apple': finalPrice = 1.25 * quantity; break;
                case 'orange': finalPrice = 0.90 * quantity; break;
                case 'grapefruit': finalPrice = 1.60 * quantity; break;
                case 'kiwi': finalPrice = 3.00 * quantity; break;
                case 'pineapple': finalPrice = 5.60 * quantity; break;
                case 'grapes': finalPrice = 4.20 * quantity; break;
                default:
                    isValid = false;
                    break;
            }
            break;
        default:
            isValid = false
            break;
    }

   if (isValid) {
       console.log(finalPrice.toFixed(2));
   }else{
       console.log('error');
   }
}