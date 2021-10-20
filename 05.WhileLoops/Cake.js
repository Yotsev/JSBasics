function numberOfpieces(inputData){
    
    let width = Number(inputData[0]);
    let length = Number(inputData[1]);
    
    let index = 2;
    let command = inputData[index];

    let piecesTaken = 0;

    let pieces = width*length;
    while (command !== 'STOP' && index<inputData.length) {

        let currentNumber = Number(inputData[index]);
        piecesTaken += currentNumber;
        
        index++
        command = inputData[index];
    }

    if (piecesTaken<=pieces) {
        console.log(`${pieces-piecesTaken} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${piecesTaken - pieces} pieces more.`);
    }
}

numberOfpieces(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

numberOfpieces(["10",
"2",
"2",
"4",
"6",
"STOP"])
