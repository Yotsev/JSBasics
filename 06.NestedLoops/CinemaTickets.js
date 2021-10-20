function tickets(inputData) {
    let index = 0;
    let command = inputData[index];
    index++;

    let standard = 0;
    let kid = 0;
    let student = 0;

    let totalTickets = 0;

    while (command !== 'Finish') {
        let name = command;
        let freeSeats = Number(inputData[index]);
        index++;

        let ticketType = inputData[index];
        index++;
        let soldTickets = 0;

        while (ticketType !== 'End') {
            soldTickets++;

            if (ticketType === 'standard') {
                standard++;
            } else if (ticketType === 'kid') {
                kid++;
            } else if (ticketType === 'student') {
                student++;
            }

            if (soldTickets >= freeSeats) {
                break;
            }
            ticketType = inputData[index];
            index++;
        }
        totalTickets += soldTickets;

        console.log(`${name} - ${(soldTickets / freeSeats * 100).toFixed(2)}% full.`);
        command = inputData[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student/totalTickets*100).toFixed(2)}% student tickets.`);
    console.log(`${(standard/totalTickets*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid/totalTickets*100).toFixed(2)}% kids tickets.`);
}
tickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])