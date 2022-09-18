var rows = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var reset = document.getElementById("reset");
reset.addEventListener("click", resetValues);

function resetValues() {
    var fname = document.getElementById("fname").value = null;
    var lname = document.getElementById("lname").value = null;
    var email = document.getElementById("email").value = null;
    var phone = document.getElementById("phone").value = null;
}

function displayDetails() {
    debugger;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (!fname || !lname || !email || !phone) {
        alert("Please fill");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(rows);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;

    rows++;
}