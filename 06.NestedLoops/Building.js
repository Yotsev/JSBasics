function layout(inputData){
    let floors = Number(inputData[0]);
    let rooms = Number(inputData[1]);

    for (let floor = floors; floor >= 1; floor--) {
        let currentFloor = '';
        for (let room = 0; room < rooms; room++) {
            if (floor === floors) {
                currentFloor += 'L' + floor + room + ' ';
            }else if (floor % 2 !== 0) {
                currentFloor += 'A' + floor + room + ' ';
            }else{
                currentFloor += 'O' + floor + room + ' ';
            }
        }
        
        console.log(currentFloor);        
    }
}
layout(["6", "4"])
