let users = [];
let usersContainer = document.getElementById("usersContainer");
let alert = document.getElementById("alert");
function renderUsers() {
  usersContainer.innerHTML = "";
  users.forEach((user) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let email = document.createElement("p");
    div.classList.add("user");
    name.innerText = user.name;
    email.innerText = user.email;
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteUser(user.email);

    usersContainer.appendChild(div);
    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(deleteBtn);
  });
}

function doesUserExist(email) {
  let user = users.filter((user) => {
    return user.email == email;
  });
  return user.length > 0 ? true : false;
}
function hideAlert() {
  setTimeout(() => {
    alert.classList.remove("success", "danger");
  }, 2000);
}

function addUser() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let user = {
    name: name.value,
    email: email.value,
  };
  let userExist = doesUserExist(email.value);
  if (userExist == false) {
    users.push(user);
    alert.classList.add("success");
    alert.innerText = "User added successfully";
    hideAlert();
  } else {
    alert.classList.add("danger");
    alert.innerText = "Email already exists";
    hideAlert();
  }

  // users.push(user);

  // console.log(users);
  renderUsers();
}

function deleteUser(email) {
  users = users.filter((u) => u.email !== email);
  renderUsers();
  alert.classList.add("success");
  alert.innerText = "User deleted";
  hideAlert();
}
