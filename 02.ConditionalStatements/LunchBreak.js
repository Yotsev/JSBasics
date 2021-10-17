function isTimeEnough(inputData) {

    let seriesName = inputData[0];
    let seriesTime = Number(inputData[1]);
    let breakTime = Number(inputData[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let timeLeft = breakTime - lunchTime - restTime;

    if (timeLeft >= seriesTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - seriesTime)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(seriesTime-timeLeft)} more minutes.`);
    }
}

isTimeEnough(["Game of Thrones", "60", "96"])
isTimeEnough(["Teen Wolf", "48", "60"])