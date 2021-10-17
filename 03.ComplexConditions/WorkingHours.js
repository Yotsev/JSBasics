function isOpen(inputData) {
    let hour = Number(inputData[0]);
    let day = inputData[1];

    let officeStatus;

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}

isOpen(["11", "Monday"])
isOpen(["19", "Friday"])
isOpen(["11", "Sunday"])