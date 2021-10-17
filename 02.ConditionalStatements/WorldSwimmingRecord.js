function isWorldRecord(inputData) {

    let worldRecord = Number(inputData[0]);
    let distance = Number(inputData[1]);
    let secPerMeter = Number(inputData[2]);

    let extraTime = Math.floor(distance / 15) * 12.5;
    let totalTime = distance * secPerMeter + extraTime;

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
    }

}

isWorldRecord(["10464", "1500", "20"])
isWorldRecord(["55555.67", "3017", "5.03"])