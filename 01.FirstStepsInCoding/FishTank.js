function litersOfWater(inputData) {
    let length = Number(inputData[0]);
    let width = Number(inputData[1]);
    let height = Number(inputData[2]);
    let percent = Number(inputData[3]);

    let volume = length * width * height;
    let volumeInLiters = volume / 1000;
    let neededLiters = volumeInLiters - volumeInLiters*percent/100;

    console.log(neededLiters);

}
litersOfWater(["85", "75", "47", "17"])