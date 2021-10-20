function pyramid(inputData){
    let end = Number(inputData[0]);

    let current = 1;
    let isBigger = false;
    let printLine = '';

    for (let rows = 1; rows <= end; rows++) {
        for (let j = 1; j <= rows; j++) {
            if (current>end) {
                isBigger = true;
                break;
            }
            printLine += current + ' ';
            current++;
        }
        console.log(printLine);
        printLine = '';
        if (isBigger) {
            break;
        }
    }
}
pyramid(["7"])