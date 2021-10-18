function surpriseCheck(inputData){

    let facebook = 150;
    let instagram = 100;
    let reddit = 50;

    let browserTabs = Number(inputData[0]);
    let salary = Number(inputData[1]);

    let hasMoney = true;
    for (let index = 0; index < browserTabs; index++) {
        
         currentSite = inputData[index+2];

         switch (currentSite) {
             case 'Facebook':  salary-= facebook; break;             
             case 'Instagram':  salary -= instagram; break;  
             case 'Reddit':  salary-= reddit; break;  
         }

         if (salary<=0) {
             hasMoney = false;
             break;
         }
    }
    if (!hasMoney) {
        console.log('You have lost your salary.');
    }else{
        console.log(salary);
    }
}

surpriseCheck(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

surpriseCheck(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

surpriseCheck(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


