let selectedRow = null;
function onFormSubmit() {
  var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    //To reset the form with empty  space
    resetForm();
}

function readFormData() {
  const formData = {};

  formData["country"] = document.getElementById("countryName").value;
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("countryDetails")
    .getElementsByTagName("tbody")[0];

  //insert row
  var newRow = table.insertRow(-1);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.country;
  let cell2 = newRow.insertCell(1);
  cell2.classList.add("text-end");
  cell2.innerHTML = `<button class="btn" onclick="onEdit(this)"><i class="fas fa-pen"></i></button>
  <button class="btn btn-danger ms-2" onclick="onDelete(this)"><i class="far fa-trash-alt"></i></button>`;
}

function resetForm() {
  document.getElementById("countryName").value = "";
  selectedRow = null;
}
//using this we are bringing the data in form if user click on edit button
function onEdit(td) {
  document.getElementById("submitBtn").innerText = "Update";
  selectedRow = td.parentElement.parentElement;
  document.getElementById("countryName").value = selectedRow.cells[0].innerHTML;
}

//Updating data after edit populate your data in form

function updateRecord(formData) {
  document.getElementById("submitBtn").innerText = "Add";
  selectedRow.cells[0].innerHTML = formData.country;
}

function onDelete(td) {
  if (confirm("Do you want to Delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("countryDetails").deleteRow(row.rowIndex);
    resetForm();
  }
}

function onSearch() {
  let searchdata = document.getElementById("search").value;
  let filter = searchdata.toUpperCase();
  let table = document
    .getElementById("countryDetailsBody")
    .getElementsByTagName("tr");

    for(let i = 0; i < table.length; i++){
      let countryName = table[i].children[0].innerHTML; 
      if (countryName.toUpperCase().indexOf(filter) > -1) table[i].style.display = "";
      else table[i].style.display = "none";
    }
}