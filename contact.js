function validateForm(){
    let x = document.forms[infoForm][Names].value;
    if (x == "")
    {
        alert("Name must be filled");
        return false;
    }

    let y = document.forms[infoForm][Surname].value;
    if (y == "")
    {
        alert("Surame must be filled");
        return false;
    }
    let z = document.forms[infoForm][ContactNo].value;
    if (y == "")
    {
        alert("Surame must be filled");
        return false;
    }
    let a = document.forms[infoForm][Date].date;
    if (a == "")
    {
        alert("Date must be filled");
        return false;
    }
    let b = document.forms[infoForm][Email].value;
    if (b == "")
    {
        alert("Email must be filled");
        return false;
    }
    let c = document.forms[infoForm][Message].value;
    if (c == "")
    {
        alert("write a message");
        return false;
    }

}