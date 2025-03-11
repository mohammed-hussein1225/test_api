// create table and add data to page

function table(data) {
  let thead = document.querySelector("table thead");
  thead.innerHTML = "";
  let headers = ["ID", "First Name", "Last Name", "Email", " "];

  let trHead = document.createElement("tr");
  headers.forEach((item) => {
    let th = document.createElement("th");
    th.textContent = item;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  let tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";

  data.forEach((item) => {
    let tr = document.createElement("tr"),
      tdID = document.createElement("td"),
      tdf_name = document.createElement("td"),
      tdl_name = document.createElement("td"),
      td_email = document.createElement("td"),
      td_del = document.createElement("td"),
      btn = document.createElement("button");

    tdID.textContent = item.id;
    tdf_name.textContent = item.first_name;
    tdl_name.textContent = item.last_name;
    td_email.textContent = item.email;
    btn.textContent = "Delete";
    btn.dataset.id = item.id;
    btn.addEventListener("click", (e) => {
      deleteItem(e.target.dataset.id);
    });

    td_del.appendChild(btn);
    tr.appendChild(tdID);
    tr.appendChild(tdf_name);
    tr.appendChild(tdl_name);
    tr.appendChild(td_email);
    tr.appendChild(td_del);
    tbody.appendChild(tr);
  });
}

$.ajax({
  url: "https://reqres.in/api/users?page=1",
  type: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  success: (res) => {
    localStorage.setItem("data", JSON.stringify(res.data));
  },
  error: (error) => console.error("Cannot get data", error),
});

function renderTable() {
  let local_data = JSON.parse(localStorage.getItem("data")) || [];
  table(local_data);
}

function deleteItem(id) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  let new_data = data.filter((item) => item.id != id);
  localStorage.setItem("data", JSON.stringify(new_data));
  renderTable();
}

renderTable();
