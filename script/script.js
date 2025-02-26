//* ----- Sort Kitchen --- Manual Fold -----

//* ----- Sort Kitchen Varibles --- Manual Fold ----- 
const allBtn = document.getElementById("all-btn")
const italyBtn = document.querySelector("#italy-btn")
const usaBtn = document.querySelector("#usa-btn")
const asiaBtn = document.querySelector("#asia-btn")

const italyCard = document.querySelector("#italy-card")
const usaCard = document.querySelector("#usa-card")
const asiaCard = document.querySelector("#asia-card")

//* ----- Sort Kitchen btn function --- Manual Fold -----
allBtn.onclick = () => {
  // Add text to document

  italyBtn.classList.remove("kitchen-btn-active")
  usaBtn.classList.remove("kitchen-btn-active")
  asiaBtn.classList.remove("kitchen-btn-active")
  if (allBtn.classList.contains("kitchen-btn-active")) {
    allBtn.classList.remove("kitchen-btn-active")
  } else {
    allBtn.classList.add("kitchen-btn-active")
  }
}

italyBtn.onclick = () => {
  allBtn.classList.remove("kitchen-btn-active")
  usaBtn.classList.remove("kitchen-btn-active")
  asiaBtn.classList.remove("kitchen-btn-active")

  usaCard.classList.toggle("hidden")
  asiaCard.classList.toggle("hidden")

  italyBtn.classList.toggle("kitchen-btn-active")
}

usaBtn.onclick = () => {
  allBtn.classList.remove("kitchen-btn-active")
  italyBtn.classList.remove("kitchen-btn-active")
  asiaBtn.classList.remove("kitchen-btn-active")
  italyCard.classList.toggle("hidden")
  asiaCard.classList.toggle("hidden")

  usaBtn.classList.toggle("kitchen-btn-active")
}

asiaBtn.onclick = () => {
  allBtn.classList.remove("kitchen-btn-active")
  italyBtn.classList.remove("kitchen-btn-active")
  usaBtn.classList.remove("kitchen-btn-active")
  italyCard.classList.toggle("hidden")
  usaCard.classList.toggle("hidden")

  asiaBtn.classList.toggle("kitchen-btn-active")
}

//* ----- Sort Time --- Manual Fold -----

//* ----- Sort Time Varibles --- Manual Fold -----
const decendBtn = document.querySelector("#decend-btn")
const acendBtn = document.querySelector("#acend-btn")

//* ----- Sort Time Varibles --- Manual Fold -----
decendBtn.onclick = () => {
  acendBtn.classList.remove("time-btn-active")
  if (decendBtn.classList.contains("time-btn-active")) {
    decendBtn.classList.remove("time-btn-active")
  } else {
    decendBtn.classList.add("time-btn-active")
  }
}

acendBtn.onclick = () => {
  decendBtn.classList.remove("time-btn-active")
  if (acendBtn.classList.contains("time-btn-active")) {
    acendBtn.classList.remove("time-btn-active")
  } else {
    acendBtn.classList.add("time-btn-active")
  }
}




