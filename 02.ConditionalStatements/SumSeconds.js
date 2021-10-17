function sumOfSeconds(inputData) {
    let firstPlayerTime = Number(inputData[0]);
    let secondPlayerTime = Number(inputData[1]);
    let thirdPlayerTime = Number(inputData[2]);

    let totalTime = firstPlayerTime + secondPlayerTime + thirdPlayerTime;

    let minutes = Math.trunc(totalTime /60);
    let seconds = totalTime%60;

    if (seconds<10) {
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
}
sumOfSeconds(["35", "45", "44"])
sumOfSeconds(["22", "7", "34"])
sumOfSeconds(["50", "50", "49"])
sumOfSeconds(["14", "12", "10"])