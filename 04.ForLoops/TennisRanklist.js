function totalPoints(inputData) {

    let tournaments = Number(inputData[0]);
    let points = Number(inputData[1]);
    let erndPoints = 0;
    let wins = 0;
    let index = 2;

    for (let i = 1; i <= tournaments; i++) {
        
        let currentPoints;
        let currentStatus = inputData[index];
        
        switch (currentStatus) {
            case 'W':
                currentPoints = 2000;
                wins++;
                break;
            case 'F': currentPoints = 1200; break;
            case 'SF': currentPoints = 720; break;
        }

        points += currentPoints;
        erndPoints += currentPoints;
        index++;
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(erndPoints / tournaments)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`);
}

totalPoints(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])