let submitbtn = document.getElementById("submitBtn");
let clearbtn = document.getElementById("clearBtn");
let shows = document.getElementById("show");

submitbtn.addEventListener("click", () => {
  shows.innerHTML = "Show leaw Kub Nong";
});

clearbtn.addEventListener("click", () => {
  shows.innerHTML = "";
});
