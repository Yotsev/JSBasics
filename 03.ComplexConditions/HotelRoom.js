function price(inputData) {

    let month = inputData[0];
    let numberOfNights = Number(inputData[1]);

    let studioPrice;
    let apartmentPrice;
    let studioStayPrice;
    let apartmentStayPrice;

    if (month === 'May' || month === 'October') {
        
        studioPrice = 50;
        apartmentPrice = 65;
        
        studioStayPrice = numberOfNights * studioPrice;

        if (numberOfNights>14) {
            studioStayPrice -= studioStayPrice*0.30;
        }else if (numberOfNights>7) {
            studioStayPrice -= studioStayPrice*0.05;
        }

        apartmentStayPrice = numberOfNights * apartmentPrice;

    } else if (month === 'June' || month === 'September') {
        
        studioPrice = 75.20;
        apartmentPrice = 68.70;

        studioStayPrice = numberOfNights * studioPrice;

        if (numberOfNights>14) {
            studioStayPrice -= studioStayPrice*0.20;
        }

        apartmentStayPrice = numberOfNights * apartmentPrice;

    } else if (month === 'July' || month === 'August') {
        studioPrice = 76;
        apartmentPrice = 77;

        studioStayPrice = numberOfNights * studioPrice;
        apartmentStayPrice = numberOfNights * apartmentPrice;
    }

    if (numberOfNights>14) {
        apartmentStayPrice -= apartmentStayPrice *0.10;
    }

    console.log(`Apartment: ${apartmentStayPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioStayPrice.toFixed(2)} lv.`);
}