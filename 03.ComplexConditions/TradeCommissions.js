function comision(inputData) {

    let city = inputData[0];
    let sales = Number(inputData[1]);

    let isValid = true;
    let comision;

    if (city === 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            comision = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            comision = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            comision = sales * 0.08;
        } else if (sales > 10000) {
            comision = sales * 0.12;
        } else if (sales < 0) {
            isValid = false;
        }

    } else if (city === 'Varna') {
        if (sales >= 0 && sales <= 500) {
            comision = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            comision = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            comision = sales * 0.10;
        } else if (sales > 10000) {
            comision = sales * 0.13;
        } else if (sales < 0) {
            isValid = false;
        }

    } else if (city === 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            comision = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            comision = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            comision = sales * 0.12;
        } else if (sales > 10000) {
            comision = sales * 0.145;
        } else if (sales < 0) {
            isValid = false;
        }
    } else {
        isValid = false;
    }

    if (isValid) {
        console.log(comision.toFixed(2));
    }else{
        console.log('error');
    }
}