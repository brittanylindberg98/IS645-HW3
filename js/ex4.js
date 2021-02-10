var EnteredPassword = prompt("Password: ")
var count = 0 

while (count <= 2) {
    if (EnteredPassword != "secret")  {
        alert("Incorrect password ! Please enter again")
        var EnteredPassword = prompt("Password: ")
    }
    else {
        alert(`You entered the correct password after ${count} attempt(s)`)
        break
    }
    count++;
}

if (count > 2 ) {
    alert(`account is locked!You failed to enter the correct password ${count} times`)
}
