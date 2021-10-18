function sum(inputData) {

    let a = 1;
    let e = 2;
    let i = 3;
    let o = 4;
    let u = 5;

    let sum = 0;

    for (let index = 0; index < inputData[0].length; index++) {

        switch (inputData[0][index]) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
        }
    }

    console.log(sum);
}

sum(["hello"])