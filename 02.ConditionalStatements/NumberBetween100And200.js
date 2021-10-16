function positionOfNumber(inputData) {
    let number = Number(inputData[0]);
    
    if (number < 100) {
        console.log('Less than 100');
    }
    else if (number >= 100 && number <= 200) {
        console.log('Between 100 and 200');
    }else{
        console.log('Greater than 200');
    }
}

positionOfNumber(["95"])
positionOfNumber(["120"])
positionOfNumber(["210"])