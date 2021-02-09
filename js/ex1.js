//to get the names from user input

var name=prompt("Enter name: ");

//to get the grade from user input and convert to integer

var grade=parseInt(prompt("Enter grade"));

//checki if input is less than 0 print as invalid

if(grade<0){

console.log("Invalid grade");

}

//else condition if its valid

else{

//printing the name

console.log("Hello "+name);

//checkinf for the freshman condition

if(grade>=0 && grade<=30){

console.log("Your grade standing is Freshman");

}

//checkinf from Sophomore condition

if(grade>=31 && grade<=60){

console.log("Your grade standing is Sophomore");

}

//checkinf for junior condtion

if(grade>=61 && grade<=90){

console.log("Your grade standing is Junior");

}

//checking for senior condition

if(grade>=91){

console.log("Your grade standing is senior");

}

}

console.log("Lindberg's Output from IS 645 HW3 Exercise 1");