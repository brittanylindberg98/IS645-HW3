var username = prompt("Enter your name: ");

var grade = parseInt(prompt("Enter number of units completed at the university: "));

if(grade<0){ console.log("Invalid. Please re-enter")}

else{
    console.log("Hello"+ username )
    
    if (grade >= 0 && grade <= 30 ) {console.log("Your grade standing is Freshman ")};
    if (grade >= 31 && grade <= 60 ) {console.log("Your grade standing is Sophomore ")};
    if (grade >= 61 && grade <= 90 ) {console.log("Your grade standing is Junior ")};
    if (grade >= 91) {console.log("Your grade standing is Senior ")};
}
console.log("Lindberg's Output from IS 645 HW3 Exercise 1");