var selectedRow = null;
const listStudent = document.querySelector("#student-list");
const container = document.querySelector(".container");
const main = document.querySelector(".main");

// show alert
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  console.log(div);
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear all field
function clearField() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#grade").value = "";
}

// Add data

document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //get form values
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const grade = document.querySelector("#grade").value;
  //validate
  if (firstName == "" || lastName == "" || grade == "") {
    // showAlert("please fill in all field", "danger");
  } else {
    if (selectedRow == null) {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${grade}</td>
    <td>
    <a href="#" class="btn btn-warning btn-sm edit me-2">Edit</a>
    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
    </td>
    `;
      listStudent.appendChild(row);
      selectedRow = null;
    } else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = grade;
      selectedRow = null;
    }
    clearField();
    // showAlert("Student Added","success")
  }
});

//Edit Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value =
      selectedRow.children[0].textContent;
    document.querySelector("#lastName").value =
      selectedRow.children[1].textContent;
    document.querySelector("#grade").value =
      selectedRow.children[2].textContent;

    //   showAlert("Student Info Edited","info");
  }
});

//Delete Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    targer.parentElement.parentElement.remove();
    // showAlert("Student Data Deleted", "danger");
  }
});
