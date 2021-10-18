function nimination(inputData) {

    let actorName = inputData[0];
    let academyPoints = Number(inputData[1]);
    let judges = Number(inputData[2]);

    let targetPoints = 1250.5;
    let actorPoints = academyPoints;

    let index = 3;

    let isNiminated = false;

    for (let i = 0; i < judges * 2 - 1; i += 2) {
        let currentJudge = inputData[index];
        let points = Number(inputData[index + 1]);
        index += 2;

        actorPoints += ((currentJudge.length * points) / 2);

        if (actorPoints >= targetPoints) {
            isNiminated = true;
            break;
        }
    }

    if (isNiminated) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(targetPoints - actorPoints).toFixed(1)} more!`);
    }
}
nimination(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
nimination(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
