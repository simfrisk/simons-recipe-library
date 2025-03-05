//* ----- Create recipe cars  --- Manual Fold -----
const recipesPlaceholder = document.querySelector("#recipes-placeholder")

const renderRecipes = (recipeArray) => {
  recipesPlaceholder.innerHTML = ""

  if (recipeArray.length === 0) {
    emptySelect()
    return
  }

  recipeArray.forEach(recipe => {

    const recipeCard = document.createElement("article")
    recipeCard.classList.add("recipe-card")

    const foodImgBg = document.createElement("div")
    foodImgBg.classList.add("food-img-bg")

    const imgFoodCard = document.createElement('img')
    imgFoodCard.classList.add("img-food-card")
    imgFoodCard.src = recipe.image
    imgFoodCard.alt = recipe.title

    const foodCardText = document.createElement("div")
    foodCardText.classList.add("food-card-text")

    const recipeTitle = document.createElement("h3")
    recipeTitle.classList.add('recipe-title')
    recipeTitle.textContent = recipe.title

    const recipeInfo = document.createElement('div')
    recipeInfo.classList.add('recipe-info')
    recipeInfo.innerHTML = `
      <hr>
      <strong>Ready in:</strong> ${recipe.readyInMinutes} minutes<br>
      <strong>Servings:</strong> ${recipe.servings}<br>
      <strong>Cuisine:</strong> ${recipe.cuisine}<br>
      <strong>Price per serving:</strong> ${recipe.pricePerServing}<br>
      <strong>Diets: </strong> ${recipe.diets}
    `

    foodImgBg.appendChild(imgFoodCard)
    foodCardText.appendChild(recipeTitle)
    foodCardText.appendChild(recipeInfo)
    recipeCard.appendChild(foodImgBg)
    recipeCard.appendChild(foodCardText)
    recipesPlaceholder.appendChild(recipeCard)
  })
}

renderRecipes(recipes)

//* ----- Sort on kitchen  --- Manual Fold -----
// todo: Need to add button highlght
// todo: to add add deselect on extra click
// Dom selectors
const mexicoBtn = document.querySelector("#mexico-btn")
const italyBtn = document.querySelector("#italy-btn")
const asiaBtn = document.querySelector("#asia-btn")
const mediterraneanBtn = document.querySelector("#mediterranean-btn")
//! Special button for testing 
const emptyBtn = document.querySelector("#empthy-btn")

// Filter on kitchen function
const filterOnKitchen = (event, cuisine) => {
  const filteredArray = recipes.filter(recepie => recepie.cuisine === cuisine)
  console.log("hello")
  event.preventDefault()
  renderRecipes(filteredArray)

}

// Event listners for buttons
mexicoBtn.addEventListener("click", (event) => filterOnKitchen(event, "Mexican"))
italyBtn.addEventListener("click", (event) => filterOnKitchen(event, "Italian"))
asiaBtn.addEventListener("click", (event) => filterOnKitchen(event, "Asian"))
mediterraneanBtn.addEventListener("click", (event) => filterOnKitchen(event, "Mediterranean"))
//! This is a placeholder item
emptyBtn.addEventListener("click", (event) => filterOnKitchen(event, "empty"))

//* ----- Sort on Time  --- Manual Fold -----
// todo: Need to add button highlght
// todo: to add add deselect on extra click
// var
const decendBtn = document.querySelector("#decend-btn")
const acendBtn = document.querySelector("#acend-btn")

// functions
const sortOnTimeDecend = (event) => {
  const sortArray = recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes)
  event.preventDefault()
  renderRecipes(sortArray)
}

// functions
const sortOnTimeAcend = (event) => {
  const sortArray = recipes.sort((a, b) => b.readyInMinutes - a.readyInMinutes)
  event.preventDefault()
  renderRecipes(sortArray)
}

// Event listeners
decendBtn.addEventListener("click", sortOnTimeDecend)
acendBtn.addEventListener("click", sortOnTimeAcend)

//* ----- Sort Random  --- Manual Fold -----
// todo: Need to add button highlght
// todo: to add add deselect on extra click
const randomBtn = document.querySelector("#random-btn")

const getRandomRecipe = (event) => {
  event.preventDefault()
  const randomIndex = Math.floor(Math.random() * recipes.length)
  const randomRecipe = [recipes[randomIndex]]
  renderRecipes(randomRecipe)
}

randomBtn.addEventListener("click", getRandomRecipe)

//* ----- Empty Selection  --- Manual Fold -----
const emptySelect = () => {
  recipesPlaceholder.innerHTML = `
  <h3>There are no recipes available with these attributes.</h3>`
}


