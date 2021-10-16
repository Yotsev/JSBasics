function areaInfo(inputData){
    
    let figure = inputData[0];
    let area = 0;
    if (figure === 'square') {
        let side = Number(inputData[1]);
        
        area = side*side;
    
    }else if (figure === 'rectangle') {
        let length = Number(inputData[1]);
        let width = Number(inputData[2]);
        
        area = length*width;
    
    }else if (figure === 'circle'){
        let radius = Number(inputData[1])

        area = Math.PI*Math.pow(radius,2);

    }else if (figure === 'triangle'){
        let sideLength = Number(inputData[1]);
        let height = Number(inputData[2]);

        area = height*sideLength / 2;
    }
console.log(area.toFixed(3));
}

areaInfo(["square", "5"])
areaInfo((["rectangle","7","2.5"]))
areaInfo(["circle","6"])
areaInfo(["triangle","4.5","20"])