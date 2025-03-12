//* ----- Main Const  --- Manual Fold -----
const recipesPlaceholder = document.querySelector("#recipes-placeholder")
let recipesData = [] // Store fetched recipes globally

let filteredRecipes = [] // Stores the currently filtered recipes

//

//* ----- Refactor recipe values  --- Manual Fold -----
const refactorVegetarian = (recipe) => (recipe.vegetarian ? "Yes" : "No")
const refactorVegan = (recipe) => (recipe.vegan ? "Yes" : "No")
const refactorPricePerServing = (recipe) => parseFloat((recipe.pricePerServing / 10).toFixed(1));

//

//* ----- Render recipes  --- Manual Fold -----
const renderRecipes = (recipes) => {
  recipesPlaceholder.innerHTML = ""

  if (recipes.length === 0) {
    recipesPlaceholder.innerHTML = "<h2>There are no recipes available with these attributes.</h2>"
    return
  }

  recipes.forEach(recipe => {
    recipesPlaceholder.innerHTML += `
      <article class="recipe-card">
        <div class="food-img-bg">
          <img class="img-food-card" src="${recipe.image}" alt="${recipe.title}">
        </div>
        <div class="food-card-text">
          <h3 class="recipe-title">${recipe.title}</h3>
          <div class="recipe-info">
            <hr>
            <strong>cuisines:</strong> ${recipe.cuisines}<br>
            <strong>Ready in:</strong> ${recipe.readyInMinutes} minutes<br>
            <strong>Servings:</strong> ${recipe.servings}<br>
            <strong>Vegetarian:</strong> ${refactorVegetarian(recipe)}<br>
            <strong>Vegan:</strong> ${refactorVegan(recipe)}<br>
            <strong>Price per serving:</strong> ${refactorPricePerServing(recipe)}<br>
          </div>
        </div>
      </article>`
    console.log(recipesData)
  })
}

//

//* ----- Fetch Api & Render recipes --- Manual Fold -----
const fetchApiData = () => {
  fetch(`https://api.spoonacular.com/recipes/random?number=30&apiKey=12a0a82f197747bbaad4be48ff221750`)
    .then(response => response.json())
    .then(data => {
      // Filter out recipes with empty cuisines
      recipesData = data.recipes.filter(recipe => recipe.cuisines.length > 0)
      renderRecipes(recipesData)
    })
    .catch(error => {
      console.error("Error fetching recipe data:", error)
      recipesPlaceholder.innerHTML = "<h2>We are out of free recipes, please try again tomorrow!</h2>" // Display error message to user
    })
}

fetchApiData()

//

//* ----- Sort on Time  --- Manual Fold -----
// Variables
const descendBtn = document.querySelector("#descend-btn")
const ascendBtn = document.querySelector("#ascend-btn")
const timeBtns = [ascendBtn, descendBtn]

const sortOnTimeDescend = (event) => {
  event.preventDefault()
  const arrayToSort = filteredRecipes.length > 0 ? filteredRecipes : recipesData
  const sortedArray = [...arrayToSort].sort((a, b) => b.readyInMinutes - a.readyInMinutes)

  timeBtns.forEach(btn => btn.classList.remove("time-btn-active"))
  descendBtn.classList.add("time-btn-active")

  renderRecipes(sortedArray)
}

const sortOnTimeAscend = (event) => {
  event.preventDefault()
  const arrayToSort = filteredRecipes.length > 0 ? filteredRecipes : recipesData
  const sortedArray = [...arrayToSort].sort((a, b) => a.readyInMinutes - b.readyInMinutes)

  timeBtns.forEach(btn => btn.classList.remove("time-btn-active"))
  ascendBtn.classList.add("time-btn-active")

  renderRecipes(sortedArray)
}

descendBtn.addEventListener("click", sortOnTimeDescend)
ascendBtn.addEventListener("click", sortOnTimeAscend)

//

//* ----- Sort on kitchen  --- Manual Fold -----
// Dom selectors
const mexicoBtn = document.querySelector("#mexico-btn")
const italyBtn = document.querySelector("#italy-btn")
const asiaBtn = document.querySelector("#asia-btn")
const mediterraneanBtn = document.querySelector("#mediterranean-btn")
const americanBtn = document.querySelector("#american-btn")
const europeBtn = document.querySelector("#europe-btn")
//! Special button for testing 
const emptyBtn = document.querySelector("#empthy-btn")

// Select all cuisine buttons
const cusineBtns = [mexicoBtn, italyBtn, asiaBtn, americanBtn, europeBtn, mediterraneanBtn]

// Filter on kitchen function
const filterOnKitchen = (event, cuisine, activeBtn) => {
  event.preventDefault()

  filteredRecipes = recipesData.filter(recipe => recipe.cuisines.includes(cuisine))

  // Remove active class from all buttons
  cusineBtns.forEach(btn => btn.classList.remove("kitchen-btn-active"))

  // Toggle the active class only for the clicked button
  activeBtn.classList.add("kitchen-btn-active")

  renderRecipes(filteredRecipes)
}

// Event listeners for buttons
mexicoBtn.addEventListener("click", (event) => filterOnKitchen(event, "Mexican", mexicoBtn))
italyBtn.addEventListener("click", (event) => filterOnKitchen(event, "Italian", italyBtn))
asiaBtn.addEventListener("click", (event) => filterOnKitchen(event, "Asian", asiaBtn))
americanBtn.addEventListener("click", (event) => filterOnKitchen(event, "American", americanBtn))
europeBtn.addEventListener("click", (event) => filterOnKitchen(event, "European", europeBtn))
mediterraneanBtn.addEventListener("click", (event) => filterOnKitchen(event, "Mediterranean", mediterraneanBtn))
emptyBtn.addEventListener("click", (event) => filterOnKitchen(event, "empty", emptyBtn))

//

//* ----- Sort Random  --- Manual Fold -----

const randomBtn = document.querySelector("#random-btn")

const getRandomRecipe = (event) => {
  event.preventDefault()
  const randomIndex = Math.floor(Math.random() * recipesData.length)
  const randomRecipe = [recipesData[randomIndex]]
  renderRecipes(randomRecipe)
}

randomBtn.addEventListener("click", getRandomRecipe)

//

//* ----- Search for recipe --- Manual Fold -----

const searchInput = document.querySelector("#search")
const searchSubmit = document.querySelector("button[type='submit']")

const searchForRecipe = (event) => {
  event.preventDefault()

  const userInput = searchInput.value.toLowerCase()
  const filteredRecipes = recipesData.filter(recipe =>
    recipe.title.toLowerCase().includes(userInput)
  )

  if (filteredRecipes.length > 0) {
    renderRecipes(filteredRecipes) // Show matching recipes
  } else {
    recipesPlaceholder.innerHTML = "<h2>No recipes found.</h2>"
  }
}

searchSubmit.addEventListener("click", searchForRecipe)

//

//* ----- Filter: Price per servning --- Manual Fold -----

const priceSlider = document.querySelector("#price-slider")
const priceOutput = document.querySelector("#price-output")

priceOutput.textContent = `${priceSlider.value} sek` // Set initial slider value

// Update the filter for price per serving
const filterByPrice = () => {
  priceOutput.textContent = `${priceSlider.value} sek` // Update displayed price

  const maxPrice = Number(priceSlider.value) // Get the selected price

  // Always filter from `recipesData` to avoid losing recipes when sliding back up
  filteredRecipes = recipesData.filter(recipe => refactorPricePerServing(recipe) <= maxPrice)

  renderRecipes(filteredRecipes) // Display the filtered recipes
}

// Event listener for price slider input
priceSlider.addEventListener("input", filterByPrice)

//


// TODO
// todo: Make a ranged slider combine with other functions"
// todo: Make a all button or generate new Recipeies
// todo: Make CSS better
// todo: Hide slider in CSS
// todo: BONUS: Make a filtered dropdown for buttons on mobile 