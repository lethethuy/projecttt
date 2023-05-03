let orderContainer = document.getElementById("orderContainer");
let dataCart = JSON.parse(localStorage.getItem("dataCart"));
console.log(dataCart);
let user = JSON.parse(localStorage.getItem("user"));
console.log(user);
let totalItem = JSON.parse(localStorage.getItem("totalitem"));
console.log(totalItem);
let numberRandom = Math.floor(Math.random() * 1000000000);
console.log(numberRandom);

function renderdataCart() {
  for (let i = 0; i < dataCart.length; i++) {
    let sum = 0;
    sum = sum + 1;
    orderContainer.innerHTML =
      orderContainer.innerHTML +
      `
    <tr id="addrow">
    <td>${sum}</td>
    <td>${dataCart[i].name}</td>
    <td></td>
    <td>${dataCart[i].amount}</td>
    <td>${numberRandom}</td>
    <td>${user[i].fname}</td>
    <td>${user[i].adrees1}</td>
    <td>${user[i].phone}</td>
    <td>HOÀN THÀNH</td>
    <td><button onclick="btnEdit()">Edit</button> <button id = "btnDelete" onclick="btnDelete()">Delete</button></td>

  </tr>

    `;
  }
}
renderdataCart();

let addRow = document.getElementById("addRow");

addRow.onclick = function (e) {
  console.log("aaa");
};
