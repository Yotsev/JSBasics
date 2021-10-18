function vacationPlace(inputData) {

    let budget = Number(inputData[0]);
    let season = inputData[1];

    let place;
    let price;
    let destination;

    if (budget <= 100) {
        switch (season) {
            case 'summer':
                price = budget * 0.30;
                place = 'Camp';
                break;
            case 'winter':
                price = budget * 0.70;
                place = 'Hotel'
                break;
        }

        destination = 'Bulgaria';

    } else if (budget > 100 && budget <= 1000) {
        switch (season) {
            case 'summer':
                price = budget * 0.40;
                place = 'Camp';
                break;
            case 'winter':
                price = budget * 0.80;
                place = 'Hotel'
                break;
        }

        destination = 'Balkans';

    } else {
        price = budget * 0.90;
        place = 'Hotel';
        destination = 'Europe';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}

vacationPlace(["50", "summer"])
vacationPlace(["75", "winter"])
vacationPlace(["312", "summer"])
vacationPlace(["678.53", "winter"])
vacationPlace(["1500", "summer"])