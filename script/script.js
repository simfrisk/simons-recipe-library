//* ----- Sort Kitchen btn  --- Manual Fold -----

const main = document.querySelector("#temp-placeholder")
const mexicoBtn = document.querySelector("#mexico-btn")
const italyBtn = document.querySelector("#italy-btn")
const usaBtn = document.querySelector("#usa-btn")
const asiaBtn = document.querySelector("#asia-btn")
const mexicoMessage = "Mexico"
const italyMessage = "Italy"
const usaMessage = "Usa"
const asiaMessage = "Asia"

const sortKitchen = (kitchenActiveBtn, kitchenNotActiveBtn1, kitchenNotActiveBtn2, kitchenNotActiveBtn3, message) => {
  return () => {
    kitchenActiveBtn.classList.toggle("kitchen-btn-active")
    kitchenNotActiveBtn1.classList.remove("kitchen-btn-active")
    kitchenNotActiveBtn2.classList.remove("kitchen-btn-active")
    kitchenNotActiveBtn3.classList.remove("kitchen-btn-active")
    main.innerHTML = (`<h3>You pressed the ${message} button!</h3>`)
    event.preventDefault()
  }
}

mexicoBtn.onclick = sortKitchen(mexicoBtn, italyBtn, usaBtn, asiaBtn, mexicoMessage)
italyBtn.onclick = sortKitchen(italyBtn, usaBtn, asiaBtn, mexicoBtn, italyMessage)
usaBtn.onclick = sortKitchen(usaBtn, asiaBtn, mexicoBtn, italyBtn, usaMessage)
asiaBtn.onclick = sortKitchen(asiaBtn, mexicoBtn, italyBtn, usaBtn, asiaMessage)


//* ----- Sort Time --- Manual Fold -----

// Varibles  
const decendBtn = document.querySelector("#decend-btn")
const acendBtn = document.querySelector("#acend-btn")
const decendMessage = "decend"
const acendMessage = "acend"

const sortTime = (timeActiveBtn, timeNotActiveBtn, message) => {
  return () => {
    timeActiveBtn.classList.toggle("time-btn-active")
    timeNotActiveBtn.classList.remove("time-btn-active")
    main.innerHTML = (`<h3>You pressed the ${message} button!</h3>`)
    event.preventDefault();
  }
}

decendBtn.onclick = sortTime(decendBtn, acendBtn, acendMessage)
acendBtn.onclick = sortTime(acendBtn, decendBtn, decendMessage)


//* ----- Click on Recepie --- Manual Fold -----

const italyCard = document.querySelector("#italy-card").onclick = () => {
  window.location = "https://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/"
}


//* ----- Darkmode --- Manual Fold -----

const darkModeToggle = document.querySelector("#darkmode-switch")
const body = document.querySelector("#body")

darkModeToggle.addEventListener("click", () => {
  console.log("nice")
  body.classList.toggle("dark-mode")
})