function percentOfClimbers(inputData) {

    let musala = 0;
    let montblanc = 0;
    let kiliminajaro = 0;
    let k2 = 0;
    let everest = 0;

    let totalNumberOfPeople = 0;

    for (let index = 1; index <= Number(inputData[0]); index++) {

        let currentGroup = Number(inputData[index]);

        totalNumberOfPeople += currentGroup;

        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup >= 6 && currentGroup <= 12) {
            montblanc += currentGroup
        } else if (currentGroup >= 13 && currentGroup <= 25) {
            kiliminajaro += currentGroup;
        } else if (currentGroup >= 26 && currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }

    console.log(`${(musala / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(montblanc / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(kiliminajaro / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalNumberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalNumberOfPeople * 100).toFixed(2)}%`);
}

percentOfClimbers(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])