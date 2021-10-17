function isInInterval(inputData){

    let number = Number(inputData[0]);

    if (number === 0 || number<-100 || number>100) {
        console.log('No');
    }else if (number>=-100 && number<= 100) {
        console.log('Yes');
    }
}
isInInterval(["-25"])
isInInterval(["0"])
isInInterval(["25"])