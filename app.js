document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addRowBtn");

    addButton.addEventListener("click", function() {
        var table = document.getElementById("myTable");

        var newRow = table.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = "4";
        cell2.innerHTML = "Anna";
        cell3.innerHTML = "Johnson";
    });
});