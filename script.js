const revealBtn = document.getElementById("revealBtn");
const screenOne = document.getElementById("screenOne");
const screenTwo = document.getElementById("screenTwo");

revealBtn.addEventListener("click", () => {
  screenOne.classList.remove("active");
  screenTwo.classList.add("active");
});