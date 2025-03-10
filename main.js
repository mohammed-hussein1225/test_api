// // let li = document.querySelectorAll("ul li");
// // let btn = document.querySelector("button");

// // // send data to api
// // btn.addEventListener("click", () => {
// //   li.forEach((li) => {
// //     fetch("https://67ce9cbb125cd5af757b3855.mockapi.io/product", {
// //       method: "POST",
// //       headers: {
// //         "Content-type": "application/json",
// //       },

// //       body: JSON.stringify({
// //         name: li.textContent,
// //         age: 15,
// //       }),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => console.log("post success", data))
// //       .catch((error) => console.error("حدث خطأ", error));
// //   });
// // });

// // // get data from api

// // let get = document.querySelector(".get");
// // get.addEventListener("click", () => {
// //   fetch("https://67ce9cbb125cd5af757b3855.mockapi.io/product")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       show(data);
// //     })
// //     .catch((error) => console.error(error));
// // });

// // function show(products) {
// //   products.sort();
// //   products.forEach((pro) => {
// //     let div = document.createElement("div"),
// //       p = document.createElement("p");
// //     p.innerHTML = pro.name;
// //     div.appendChild(p);
// //     document.body.appendChild(div);
// //   });
// // }

// // // edit data from api
// // let edit = document.querySelector(".edit");
// // edit.addEventListener("click", () => {
// //   fetch("https://67ce9cbb125cd5af757b3855.mockapi.io/product")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       data.forEach((pro) => {
// //         fetch(
// //           `https://67ce9cbb125cd5af757b3855.mockapi.io/product/${pro.age}`,
// //           {
// //             method: "PUT",
// //             headers: {
// //               "Content-type": "application/json",
// //             },
// //             body: JSON.stringify({
// //               name: "ًWelcome to my website",
// //             }),
// //           }
// //         );
// //       });
// //     })
// //     .catch((error) => console.error(error));
// // });

// // // delete data from api
// // let del = document.querySelector(".del");

// // del.addEventListener("click", () => {
// //   fetch("https://67ce9cbb125cd5af757b3855.mockapi.io/product/9")
// //     .then((res) => res.json())
// //     .then((data) => {
// //       if (data) {
// //         fetch("https://67ce9cbb125cd5af757b3855.mockapi.io/product/9", {
// //           method: "PATCH",
// //           headers: {
// //             "Content-type": "application/json",
// //           },
// //           body: JSON.stringify({ age: null }),
// //         })
// //           .then((response) => response.json())
// //           .catch((error) => console.log(" not del", error));
// //       } else {
// //         console.log("data not found");
// //       }
// //     })
// //     .catch((error) => console.log("problem", error));
// // });

// function getdata() {
//   return {
//     users: [],

//     inite() {
//       fetch("https://reqres.in/api/users?page=1")
//         .then((response) => response.json())
//         .then((data) => {
//           this.users = data.data;
//         })
//         .catch((error) => console.error("can not found data", error));
//     },

//     post() {
//       fetch("https://67ce9cbb125cd5af757b3855.mockapi.io/data ", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(this.users),
//       })
//         .then((response) => response.json())
//         .catch((error) => console.error(error));
//     },
//   };
// }

// get data from Api
let btn2 = document.querySelector(".btn2");

var data = [];
btn2.onclick = () => {
  $.ajax({
    url: "https://reqres.in/api/users?page=1",
    type: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    success: (response) => (
      (data = response.data), console.log("البيانات التي تم الحصول عليها", data)
    ),
    error: (error) => console.log(error),
  });
};

//  send data to Api

let btn3 = document.querySelector(".btn3");

let newUser = {
  id: 1,
  first_name: "mohammed",
  last_name: "hussein",
  email: "usermohammed@gmail.com",
};

btn3.onclick = () => {
  $.ajax({
    url: "https://67ce9cbb125cd5af757b3855.mockapi.io/data",
    type: "POST",
    data: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
    success: (response) => console.log("البيانات التي تم ارسالها ", response),
    error: (error) => console.error("data not sent", error),
  });
};

// delete data from Api

let btn = document.querySelector(".btn");
btn.onclick = () => {
  $.ajax({
    url: "https://67ce9cbb125cd5af757b3855.mockapi.io/data/1",
    type: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    success: (response) =>
      console.log(response, console.log("البيانات التي تم حذفها", response)),
    error: (error) => console.error("data not sent", error),
  });
};
