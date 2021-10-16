function isCorect(inputData) {
    let targetPassword = 's3cr3t!P@ssw0rd';
    let password = inputData[0];
    
    if (password === targetPassword) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
isCorect(["qwerty"])
isCorect(["s3cr3t!P@ssw0rd"])