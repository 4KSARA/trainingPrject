HTML FIle

    <
    !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Details In table < /title> < /
    head > <
    body style = "background-color: cyan;" >


    <
    center >
    <
    h1 > Data Table Form < /h1>
First Name:
    <
    input type = "text"
id = "fname"
name = "firstName" / > < /br></br >

    Last Name:
    <
    input type = "text"
id = "lname"
name = "lastName" / > < /br></br >

    Email: & nbsp; & nbsp; & nbsp; <
input type = "email"
id = "email"
name = "email" / > < /br></br >

    Phone:
    <
    input type = "tel"
id = "phone"
name = "phone" / > < /br></br >

    <
    button type = "submit"
id = "entry" > Submit < /button>

<
button type = "reset"
id = "reset" > Reset < /button>

<
/center>


<
hr >

    <
    table border = "2"
id = "display" >
    <
    tr >

    <
    th > First Name < /th> <
th > Last Name < /th> <
th > Email < /th> <
th > Phone < /th> < /
    tr > <
    /table>

<
script src = "script.js" > < /script>

<
/body> < /
html >

    var display = document.getElementById("display");
var newRow = display.insertRow(row);

var cell1 = newRow.insertcell(0);
var cell2 = newRow.insertcell(1);
var cell3 = newRow.insertcell(2);
var cell4 = newRow.insertcell(3);


cell1.innerHTML = FirstName;
cell2.innerHTML = LastName;
cell3.innerHTML = Email;
cell4.innerHTML = PhoneNumber;
row++;