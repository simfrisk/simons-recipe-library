const allBtn = document.getElementById("all-btn")
const italyBtn = document.querySelector("#italy-btn")
const usaBtn = document.querySelector("#usa-btn")
const chinaBtn = document.querySelector("#china-btn")


allBtn.onclick = () => {
  italyBtn.classList.remove("kitchen-btn-active")
  usaBtn.classList.remove("kitchen-btn-active")
  chinaBtn.classList.remove("kitchen-btn-active")
  if (allBtn.classList.contains("kitchen-btn-active")) {
    allBtn.classList.remove("kitchen-btn-active")
  } else {
    allBtn.classList.add("kitchen-btn-active")
  }
}

italyBtn.onclick = () => {
  allBtn.classList.remove("kitchen-btn-active")
  usaBtn.classList.remove("kitchen-btn-active")
  chinaBtn.classList.remove("kitchen-btn-active")
  if (italyBtn.classList.contains("kitchen-btn-active")) {
    italyBtn.classList.remove("kitchen-btn-active")
  } else {
    italyBtn.classList.add("kitchen-btn-active")
  }
}

usaBtn.onclick = () => {
  allBtn.classList.remove("kitchen-btn-active")
  italyBtn.classList.remove("kitchen-btn-active")
  chinaBtn.classList.remove("kitchen-btn-active")
  if (usaBtn.classList.contains("kitchen-btn-active")) {
    usaBtn.classList.remove("kitchen-btn-active")
  } else {
    usaBtn.classList.add("kitchen-btn-active")
  }
}

chinaBtn.onclick = () => {
  allBtn.classList.remove("kitchen-btn-active")
  italyBtn.classList.remove("kitchen-btn-active")
  usaBtn.classList.remove("kitchen-btn-active")
  if (chinaBtn.classList.contains("kitchen-btn-active")) {
    chinaBtn.classList.remove("kitchen-btn-active")
  } else {
    chinaBtn.classList.add("kitchen-btn-active")
  }
}

const decendBtn = document.querySelector("#decend-btn")
const acendBtn = document.querySelector("#acend-btn")

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

