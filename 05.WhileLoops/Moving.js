function spaceLeft(inputData) {

    let width = Number(inputData[0]);
    let length = Number(inputData[1]);
    let height = Number(inputData[2]);

    let neededSpace = width * length * height;

    let index = 3;
    let command = inputData[index];

    let space = 0;

    while (command !== 'Done' && index<inputData.length) {
        let currentSpace = Number(inputData[index]);

        space += currentSpace;

        index++;
        command = inputData[index];
    }

    if (space <= neededSpace) {
        console.log(`${neededSpace - space} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${space-neededSpace} Cubic meters more.`);
    }
}

spaceLeft(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
spaceLeft(["10",
"1",
"2",
"4",
"6",
"Done"])