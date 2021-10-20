function travel(inputData){
    let index = 0;
    
    let command = inputData[index];

    while (command !== 'End') {
        let destination = inputData[index];
        let price = Number(inputData[index+1]);
        
        index += 2;
        let saveings = 0;
        while (saveings<price) {
            saveings += Number(inputData[index]);
            index++;
        }

        console.log(`Going to ${destination}!`);

        command = inputData[index];
    }
}

travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

