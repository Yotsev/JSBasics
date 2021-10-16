function project(inputData) {
    let architectName = inputData[0];
    let projectsCount = Number(inputData[1]);
    let timeForProject = 3;

    let hours = projectsCount * timeForProject;

    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectsCount} project/s.`);
}
project(["George", "4"])