//let newRow = document.querySelector("#newRow");
//let table = document.querySelector("table");

function addNewRow() {
    let rowContainer = document.querySelector(".rowContainer");
    let newRow = document.createElement("row");

    let textInput = document.createElement("input");
    let valueInput = document.createElement("input");
    textInput.classList.add("textInput");
    valueInput.classList.add("valueInput");
    valueInput.setAttribute("type", "number");
    
    let upButton = document.createElement("button");
    let downButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    upButton.addEventListener("click", up);
    downButton.addEventListener("click", down);
    deleteButton.addEventListener("click", deleteRow);

    upButton.innerHTML = "↑";
    downButton.innerHTML = "↓";
    deleteButton.innerHTML = "x";
    
    newRow.appendChild(textInput);
    newRow.appendChild(valueInput);
    newRow.appendChild(upButton);
    newRow.appendChild(downButton);
    newRow.appendChild(deleteButton);

    rowContainer.appendChild(newRow);
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

function deleteRow(event) {
    event.target.parentElement.remove();
}

function up(event) {
    previousRow = event.target.parentElement.previousElementSibling;
    if (previousRow) {
        event.target.parentElement.after(previousRow);
    }
}

function down(event) {
    nextRow = event.target.parentElement.nextElementSibling;
    if (nextRow) {
        event.target.parentElement.before(nextRow);
    }
}