function budget(inputData) {

    let filmBudget = Number(inputData[0]);
    let extras = Number(inputData[1]);
    let outfitPrice = Number(inputData[2]);

    let decor = filmBudget * 0.1;
    let totalOutfitsPrice = extras * outfitPrice;

    if (extras > 150) {
        totalOutfitsPrice -= totalOutfitsPrice * 0.1;
    }

    let totalFilmPrice = decor + totalOutfitsPrice;

    if (totalFilmPrice > filmBudget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalFilmPrice - filmBudget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(filmBudget - totalFilmPrice).toFixed(2)} leva left.`);
    }
}

budget(["20000", "120", "55.5"])
budget(["15437.62", "186", "57.99"])
budget(["9587.88", "222", "55.68"])