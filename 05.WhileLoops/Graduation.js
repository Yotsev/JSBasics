function avgGrade(inputData){
    
    let name = inputData[0];
    
    let fail = 0;
    let index = 1;
    let gradesSum = 0;

    while (index < inputData.length) {
        
        let currenGrade = Number(inputData[index]);
        if (currenGrade<4) {
            fail++;
        }

        if (fail == 2) {
            break;
        }
        gradesSum += currenGrade;
        index++;
    }

    if (fail == 2) {
        console.log(`${name} has been excluded at ${index-1} grade`);
    }else{
        let avgGrade = gradesSum/(index-1);
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

avgGrade(["Gosho",
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])