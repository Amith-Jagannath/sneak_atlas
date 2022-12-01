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
