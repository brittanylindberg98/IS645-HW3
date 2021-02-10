var DayEntered = prompt("Enter a day of the week: (sun, mon, tue, wed, thu, fri, and sat): ")

var FollowingDay

switch (DayEntered) {
    case "mon":
        FollowingDay = "tue";
        break;
    case "tue":
        FollowingDay = "wed";
        break;   
    case "wed":
        FollowingDay = "thu";
        break;
    case "thu":
        FollowingDay = "fri";
        break;
    case "fri":
        FollowingDay = "sat";
        break;
    case "sat" :
        FollowingDay = "sun";
        break;
    case "sun":
        FollowingDay = "mon";
        break;
    default:
        console.log("invalid day entered");
    

}
console.log("You entered: "+ DayEntered)
console.log("The following day is: " + FollowingDay)