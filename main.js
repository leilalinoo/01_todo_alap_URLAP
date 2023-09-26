import AutokUrlap from "./AutokUrlap.js";
$(function () {
  let tarolo = $(".ujadat");

  const list = [];

  new AutokUrlap({ tipus: "", rendszam: "" }, tarolo);

  $(window).on("gyujtes", (event) => {
    console.log(event.detail);
    list.push(event.detail);
    console.log(list);
  });
});
