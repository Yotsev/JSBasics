function validPassword(inputData){
    let username = inputData[0];
    let password = inputData[1];

    let index = 2;

    while (inputData[index] !== password) {
                
        index++;
    }
    
    console.log(`Welcome ${username}!`);
}

validPassword(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
