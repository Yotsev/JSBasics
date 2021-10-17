function title(inputData) {

    let age = Number(inputData[0]);
    let gender = inputData[1];

    let title;

    if (gender === 'm') {
        if (age < 16) {
            title = 'Master'
        } else if (age >= 16) {
            title = 'Mr.';
        }
    } else {
        if (age < 16) {
            title = 'Miss';
        } else if (age >= 16) {
            title = 'Ms.';
        }
    }

    console.log(title);
}

title(["12", "f"])
title(["17", "m"])
title(["25", "f"])
title(["13.5", "m"])