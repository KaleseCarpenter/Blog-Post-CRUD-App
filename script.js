 //Clicking Edit - will show corresponding employee row
// Inserting info will show will show null
var rowPicker = null
 
function formSubmit(){
   if (validation()){
       var formInfo = readFormInput();
       if(rowPicker == null)
       inputNewRecord(formInfo);
       else
       updateData(formInfo);

       resetForm();
   }
}
// Get information that is entered in the form, put all items inside an object
function readFormInput(){
    var formInfo = {};
    formInfo["companyName"] = document.getElementById("companyName").value;
    formInfo["dateApplied"] = document.getElementById("dateApplied").value;
    formInfo["salary"] = document.getElementById("salary").value;
    formInfo["cityState"] = document.getElementById("cityState").value;
    return formInfo;
}

   // Insert new information that is entered into the form inside the table
function inputNewRecord(data) {
   var table =  document.getElementById("formSubmissions").getElementsByTagName('tbody')[0];
   // Pass the index of the new row by doing table.length
   var newRow = table.insertRow(table.length);
   cell1 = newRow.insertCell(0); // call function insert cell with the index of the cell
   cell1.innerHTML = data.companyName;
   cell2 = newRow.insertCell(1); // get the index of the cell
   cell2.innerHTML = data.dateApplied;
   cell3 = newRow.insertCell(2);
   cell3.innerHTML = data.salary;
   cell4 = newRow.insertCell(3);
   cell4.innerHTML = data.cityState;
   cell4 = newRow.insertCell(4);
   cell4.innerHTML = `<a onClick="editBtn(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`; //  u can use "" , '' or ``
}

// Reset the Form
function resetForm(){
   document.getElementById("companyName").value = "";
   document.getElementById("dateApplied").value = "";
   document.getElementById("salary").value = "";
   document.getElementById("cityState").value = "";
   rowPicker = null;
}
// Function to EDIT entries

function editBtn(td) {
   rowPicker = td.parentElement.parentElement;
   document.getElementById("companyName").value = rowPicker.cells[0].innerHTML;
   document.getElementById("dateApplied").value = rowPicker.cells[1].innerHTML;
   document.getElementById("salary").value = rowPicker.cells[2].innerHTML;
   document.getElementById("cityState").value = rowPicker.cells[3].innerHTML;
}

//  Update Entry
function updateData(formInfo) {
   rowPicker.cells[0].innerHTML = formInfo.companyName;
   rowPicker.cells[1].innerHTML = formInfo.dateApplied;
   rowPicker.cells[2].innerHTML = formInfo.salary;
   rowPicker.cells[3].innerHTML = formInfo.cityState;
}

// Delete an Entry
function onDelete (td) {
   if (confirm('Do you really want to delete this record?')){
       
       row = td.parentElement.parentElement;
       document.getElementById("formSubmissions").deleteRow(row.rowIndex);
       resetForm();
   }
}


// Require the Company name Input before submission
function validation(){
   isValid = true;
   if (document.getElementById("companyName").value == ""){
       isValid - false;
       document.getElementById("companyValidationError").classList.remove("hide");
   } else {
       isValid = true;
       if (!document.getElementById("companyValidationError").classList.remove("hide"))
       document.getElementById("companyValidationError").classList.add("hide");
   }
   return isValid;
}
