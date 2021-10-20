function trainers(inputData) {
    let index = 0;
    let people = Number(inputData[index]);
    index++;
    let command = inputData[index];
    index++;

    let sumGrades = 0;
    let counter = 0;
    while (command != 'Finish') {
        counter++;
        let name = command;
        let curentSumOfGrades = 0;

        for (let i = 0; i < people; i++) {
            let grade = Number(inputData[index]);
            index++;

            curentSumOfGrades += grade;
        }
        let currentAvgGrade = curentSumOfGrades / people;
        console.log(`${name} - ${currentAvgGrade.toFixed(2)}.`);

        sumGrades += currentAvgGrade;
        command = inputData[index];
        index++;
    }
    let avgGrade = sumGrades / counter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
