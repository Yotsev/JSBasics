function steps(inputData) {

    let index = 0;
    let action = inputData[index];
    let targetSteps = 10000;
    let steps = 0;

    let isGoalReached = false;
    let isGoingHome = false;

    while (index < inputData.length) {

        if (action === 'Going home') {
            let stepsToGetHome = Number(inputData[index + 1])
            steps += stepsToGetHome;
            isGoingHome = true;
        } else {
            let currentSteps = Number(inputData[index]);
            steps += currentSteps;
        }

        if (steps >= targetSteps) {
            isGoalReached = true;
        }

        if (isGoingHome) {
            break;
        }

        index++;
        action = inputData[index];
    }

    if (isGoalReached) {
        console.log('Goal reached! Good job!')
        console.log(`${steps - targetSteps} steps over the goal!`);
    } else {
        console.log(`${targetSteps - steps} more steps to reach goal.`);
    }
}

steps(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])

    
steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

