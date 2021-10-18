function income(inputData){
    
    let typeOfViewing = inputData[0];
    let rows = Number(inputData[1]);
    let cols = Number(inputData[2]);

    let prime = 12;
    let normal = 7.50;
    let discount = 5.00;

    let totalSeats = rows * cols;

    let totalIncome;

    if (typeOfViewing === 'Premiere') {
        totalIncome = totalSeats*prime;
    }else if (typeOfViewing === 'Normal') {
        totalIncome = totalSeats*normal;
    }else{
        totalIncome = totalSeats*discount
    }

    console.log(`${totalIncome.toFixed(2)} leva`);
}

income(["Premiere","10","12"])
income(["Normal","21","13"])
income(["Discount","12","30"])