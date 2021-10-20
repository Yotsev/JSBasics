function solve(inputData){

    let numberOfFails = Number(inputData[0]);
    let index = 1;
    let fails = 0;
    let command = inputData[index];

    let hasFailed = false;
    let sumOfGrade = 0;
    let tasks = 0;

    while (command !== 'Enough') {
        let task = inputData[index];
        let grade = Number(inputData[index+1]);

        if (grade<= 4) {
            fails++;
        }
        
        if (fails === numberOfFails) {
            hasFailed = true;
            break;
        }

        sumOfGrade+= grade;
        index+=2;
        tasks++;
        command = inputData[index];
    }

    if (hasFailed) {
        console.log(`You need a break, ${fails} poor grades.`);
    }else{
        let avgGrade = sumOfGrade/tasks;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${tasks}`);
        console.log(`Last problem: ${inputData[index-2]}`);
    }
}
solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])