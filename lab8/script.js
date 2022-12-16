//let newRow = document.querySelector("#newRow");
//let table = document.querySelector("table");

function addNewRow() {
    newTable = document.querySelector(".row").cloneNode(true);
    newRow.appendChild(newTable);
}

function saveInformation() {
    jsText = document.querySelector("#jsText");

    textDate = document.querySelectorAll(".textInput");
    valueDate = document.querySelectorAll(".valueInput");

    allDate = [];
    for (let i = 0; i < valueDate.length; i++) {
        allDate.push(textDate[i].value + ":" + valueDate[i].value);
    }

    allDate = JSON.stringify(allDate);
    allDate = '{' + allDate.slice(1, allDate.length - 1) + '}';
    jsText.innerHTML = allDate;
}

function deleteRow(row) {
    row.parentElement.remove();
}

function up(row) {
    previousRow = row.parentElement.previousElementSibling;
    if (previousRow) {
        row.parentElement.after(previousRow);
    }
}

function down(row) {
    nextRow = row.parentElement.nextElementSibling;
    if (nextRow) {
        row.parentElement.before(nextRow);
    }
}