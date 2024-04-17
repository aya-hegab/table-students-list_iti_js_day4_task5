var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var parent = document.querySelector(".parent");
var id = 1;
// var nameIsReq = "name is a required field";
// var ageIsReq = "age is a required field";
var nameMsg = "name have to be at least 3 characters ";
var ageMsg = "age have to be 18+";
var nameLabel = document.getElementById("nameLabel");
var ageLabel = document.getElementById("ageLabel");
var bothMsg = "both fields are rquired";

// function check(name, age) {
//   // console.log(name.value);
//   // console.log(age.value);
//   if (name.value.length < 3) {
//     name.setAttribute("class", "required-field");
//     nameLabel.innerHTML = nameMsg;
//     return -1;
//   } else if (age.value < 18) {
//     age.setAttribute("class", "required-field");
//     ageLabel.innerHTML = ageMsg;
//   }
//   // if (
//   //   name.value.length < 3 ||
//   //   age.value < 18 ||
//   //   name.value == " " ||
//   //   age.value == " "
//   // ) {
//   //   console.log("not valid");
//   //   name.setAttribute("class", "required-field");
//   //   age.setAttribute("class", "required-field");
//   //   return -1;
//   else {
//     console.log("valid");
//     name.classList.remove("required-field");
//     age.classList.remove("required-field");
//     return 1;
//   }
// }
function check(name, age) {
  // if (name.value == null || age.value == null) {
  //   console.log(age.value);
  //   console.log(name.value);
  //   name.setAttribute("class", "required-field");
  //   age.setAttribute("class", "required-field");
  //   nameLabel.innerHTML = bothMsg;
  //   return -1;
  // }
  if (name.value.length >= 3 && age.value >= 18) {
    age.classList.remove("required-field");
    name.classList.remove("required-field");
    ageLabel.innerHTML = "";
    nameLabel.innerHTML = "";
    return 1;
  } else if (age.value < 18 && name.value.length < 3) {
    console.log(age);
    console.log(name);
    name.setAttribute("class", "required-field");
    nameLabel.innerHTML = nameMsg;

    age.setAttribute("class", "required-field");
    ageLabel.innerHTML = ageMsg;
    return -1;
  } else if (name.value.length < 3) {
    name.setAttribute("class", "required-field");
    nameLabel.innerHTML = nameMsg;
    age.classList.remove("required-field");
    ageLabel.innerHTML = "";
    return -1;
  } else if (age.value < 18) {
    age.setAttribute("class", "required-field");
    ageLabel.innerHTML = ageMsg;
    name.classList.remove("required-field");
    nameLabel.innerHTML = "";
    return -1;
  }
}

function addStudents() {
  var temp = check(nameInput, ageInput);
  if (temp != -1) {
    parent.classList.remove("hide");
    var newRow = document.createElement("tr");
    // newRow.setAttribute("class", "done");
    newRow.setAttribute("class", `c${id}`);
    newRow.classList.add("here");
    // newRow.setAttribute("class", `here`);
    parent.lastElementChild.after(newRow);

    var newID = document.createElement("td");
    newID.innerHTML = id;
    // newID.setAttribute("class", `c${id}`);
    newRow.appendChild(newID);

    var newName = document.createElement("td");
    newName.innerHTML = nameInput.value;
    // newName.setAttribute("class", `c${id}`);
    newRow.appendChild(newName);

    var newAge = document.createElement("td");
    newAge.innerHTML = age.value;
    // newAge.setAttribute("class", `c${id}`);
    newRow.appendChild(newAge);

    var actionCell = document.createElement("td");

    newRow.appendChild(actionCell);

    var actionButton = document.createElement("button");
    actionButton.innerHTML = "Delete";

    resetIDs();
    console.log(newRow.getAttribute("class"));

    actionButton.setAttribute("onClick", `deletElement(${id})`);
    // actionButton.setAttribute("class", `c${id}`);
    actionCell.appendChild(actionButton);
    id++;
  }
}

function deletElement(id) {
  document.querySelector(`tr.c${id}`).remove();

  resetIDs();
}

function resetIDs() {
  var restOfTheRows = document.querySelectorAll(".here");
  // console.log(restOfTheRows[0].children[0].innerHTML);

  for (var i = 0; i < restOfTheRows.length; i++) {
    restOfTheRows[i].children[0].innerHTML = i + 1;
  }
}
