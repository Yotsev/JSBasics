function sum(inputData){

    let targetSum = Number(inputData[0]);
    let index = 1;
    let sum = 0;
    while (sum<targetSum) {
        sum+= Number(inputData[index]);
        index++;
    }

    console.log(sum);
}

sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
