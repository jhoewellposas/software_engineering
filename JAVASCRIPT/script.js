var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve data
function readFormData() {
    var formData = {};
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["birthdate"] = document.getElementById("birthdate").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

//Insert data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.idNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.firstName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.lastName;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.birthdate;
    cell5 = newRow.insertCell(4);
	    cell5.innerHTML = data.address;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idNumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("birthdate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("address").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idNumber;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.birthdate;
    selectedRow.cells[4].innerHTML = formData.address;
}

//Delete data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset data
function resetForm() {
    document.getElementById("idNumber").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("birthdate").value = '';
    document.getElementById("address").value = '';
    selectedRow = null;
}