const allBtn = document.getElementById("all-btn")
const italyBtn = document.querySelector("#italy-btn")
const usaBtn = document.querySelector("#usa-btn")
const chinaBtn = document.querySelector("#china-btn")
const kitchenBtns = document.querySelectorAll(".kitchen-btn") // If there are multiple buttons with the same class

// kitchenBtns.forEach(kitchenBtn => {
//   kitchenBtn.onclick = () => {
//     if (kitchenBtn.classList.contains("time-btn-active")) {
//       kitchenBtn.classList.remove("time-btn-active");
//     } else {
//       kitchenBtn.classList.add("time-btn-active");
//     }
//   }
// });

allBtn.onclick = () => {
  if (allBtn.classList.contains("time-btn-active")) {
    allBtn.classList.remove("time-btn-active");
  } else {
    allBtn.classList.add("time-btn-active");
  }
};