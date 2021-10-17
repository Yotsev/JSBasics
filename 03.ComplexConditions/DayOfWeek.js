function getDay(inputData) {
    let dayNumber = Number(inputData[0]);

    switch (dayNumber) {
        case 1:console.log('Monday'); break;
        case 2:console.log('Tuesday'); break;
        case 3:console.log('Wednesday'); break;
        case 4:console.log('Thursday'); break;
        case 5:console.log('Friday'); break;
        case 6:console.log('Saturday'); break;
        case 7:console.log('Sunday'); break;
        default: console.log('Error');    break;
    }
}

getDay(["1"])
getDay(["2"])
getDay(["3"])
getDay(["4"])
getDay(["5"])
getDay(["6"])
getDay(["7"])
getDay(["-1"])
