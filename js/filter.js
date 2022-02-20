const closeFilterBtn = document.getElementById("close--filter");
const openFilterBtn = document.getElementById("open--filter");
const filterBar = document.getElementsByClassName("aside--grid");

openFilterBtn.addEventListener("click", () => {
  filterBar[0].classList.add("aside--on");
});

closeFilterBtn.addEventListener("click", () => {
  filterBar[0].classList.remove("aside--on");
});
