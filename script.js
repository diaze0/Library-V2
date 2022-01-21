var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["SonTitre"] = document.getElementById("SonTitre").value;
    formData["SonAuteur"] = document.getElementById("SonAuteur").value;
    formData["SonPrix"] = document.getElementById("SonPrix").value;
    formData["SaDateDePublication"] = document.getElementById("SaDateDePublication").value;
    formData["SaLangue"] = document.getElementById("SaLangue").value;
    formData["SonType"] = document.getElementById("SonType").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.SonTitre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.SonAuteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.SonPrix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.SaDateDePublication;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.SaLangue;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.SonType;
    cell5 = newRow.insertCell(6);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("SonTitre").value = "";
    document.getElementById("SonAuteur").value = "";
    document.getElementById("SonPrix").value = "";
    document.getElementById("SaDateDePublication").value = "";
    document.getElementById("SaLangue").value = "";
    document.getElementById("SonType").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("SonTitre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("SonAuteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("SonPrix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("SaDateDePublication").value = selectedRow.cells[3].innerHTML;
    document.getElementById("SaLangue").value = selectedRow.cells[4].innerHTML;
    document.getElementById("SonType").value = selectedRow.cells[5].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.SonTitre;
    selectedRow.cells[1].innerHTML = formData.SonAuteur;
    selectedRow.cells[2].innerHTML = formData.SonPrix;
    selectedRow.cells[3].innerHTML = formData.SaDateDePublication;
    selectedRow.cells[4].innerHTML = formData.SaLangue;
    selectedRow.cells[5].innerHTML = formData.SonType;

    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("SonTitre").value == "") {
        isValid = false;
        document.getElementById("SonTitreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("SonTitreValidationError").classList.contains("hide"))
            document.getElementById("ValidationError").classList.add("hide");
    }
    return isValid;
}

function selectedprint()
         {
            var selectionwindow=window.open();
            selectionwindow.document.write(document.getElementById("tab").innerHTML);
            selectionwindow.print();
            selectionwindow.close();
         }
