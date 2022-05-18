 //Clicking Edit - will show corresponding employee row
// Inserting info will show will show null
 var selectedRow = null
 
 function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);

    resetForm();
 }
 // Get information that is entered in the form, put all items inside an object
 function readFormData(){
     var formData = {};
     formData["fullName"] = document.getElementById("fullName").value;
     formData["empCode"] = document.getElementById("empCode").value;
     formData["salary"] = document.getElementById("salary").value;
     formData["city"] = document.getElementById("city").value;
     return formData;
 }

    // Insert new information that is entered into the form inside the table
function insertNewRecord(data) {
    var table =  document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    // Pass the index of the new row by doing table.length
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0); // call function insert cell with the index of the cell
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1); // get the index of the cell
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                      <a onClick="onDelete(this)">Delete</a>`; //  u can use "" , '' or ``
}

// Reset the Form
function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}
// Function to EDIT entries

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

//  Update Entry
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

// Delete an Entry
function onDelete (td) {
    if (confirm('Do you really want to delete this record ?')){
        
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

