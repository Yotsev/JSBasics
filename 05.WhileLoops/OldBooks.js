function FindBook(inputData){
    
    let targetBook = inputData[0];
    let index = 1;

    let isFound = false;
    while (inputData[index] !== 'No More Books') {
        
        if (inputData[index] === targetBook) {
            isFound = true;
            break;
        }

        index++
    }

    if (isFound) {
        console.log(`You checked ${index-1} books and found it.`);
    }else{
        console.log('The book you search is not here!');
        console.log(`You checked ${index-1} books.`);
    }
}

FindBook(["Troy",
"Stronger",
"Life Style",
"Troy"])
FindBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
FindBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])