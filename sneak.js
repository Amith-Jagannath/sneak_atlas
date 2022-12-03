function prodid(id) {
  console.log(id);
  let data = { product_id: id };
  fetch("/individualshoe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
}

// function JavaScript_Function() {
//   console.log("yes");
// }
// const nike = document.getElementById("nike");
// nike.addEventListener("click", function () {
//   // let data = { brand: nike };
//   fetch("/nike", {
//     method: "POST",
//     // headers: { "Content-Type": "application/json" },
//     // body: JSON.stringify(data),
//   }).then((res) => {
//     console.log("Request complete! response:", res);
//   });
// });
function expand() {
  fetch("/nike", {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
}
