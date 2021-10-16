function equipment(inputData){

    let pricePerYear = Number(inputData[0]);

    let snikersPrice = pricePerYear - pricePerYear *0.40;
    let outfitPrice = snikersPrice - snikersPrice *0.20;
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let equipmentPrice = snikersPrice+outfitPrice+ballPrice+accessoriesPrice

    let totalPrice = equipmentPrice + pricePerYear;

    console.log(totalPrice);
}
equipment(["365"])