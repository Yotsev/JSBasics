function readArray(inputData){

    let index = 0;
    while (inputData[index] !== 'Stop') {
        console.log(inputData[index]);

        index++;
    }
}

readArray(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])