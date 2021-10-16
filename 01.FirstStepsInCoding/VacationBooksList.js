function vacatonBooks(inputData) {
    let numberOfPages = Number(inputData[0]);
    let pagesPerHour = Number(inputData[1]);
    let days = Number(inputData[2]);

    let totalHours = numberOfPages / pagesPerHour;
    let neededDays = totalHours/days;

    console.log(neededDays);
}
vacatonBooks(["212", "20", "2"])