function calculateTime(inputData) {
    let hours = Number(inputData[0]);
    let minutes = Number(inputData[1]);

    let plusMinutes = 15;
    minutes += plusMinutes

    if (minutes > 59) {
        hours++;
        minutes -= 60;
    }
    if (hours > 23) {
        hours = 0;
    }

    if (minutes < 10) {
            console.log(`${hours}:0${minutes}`);
    }else{
        console.log(`${hours}:${minutes}`);
    }
}
calculateTime(["1", "46"])
calculateTime(["0", "01"])
calculateTime(["23", "59"])
calculateTime(["11", "08"])
calculateTime(["12", "49"])