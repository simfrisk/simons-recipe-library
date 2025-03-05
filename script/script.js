//* ----- Create recipe cars  --- Manual Fold -----
const recipesPlaceholder = document.querySelector("#recipes-placeholder")


const renderRecipes = (recepieArray) => {
  recipesPlaceholder.innerHTML = ""

  recepieArray.forEach(recipe => {

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
// Dom selectors
const mexicoBtn = document.querySelector("#mexico-btn")
const italyBtn = document.querySelector("#italy-btn")
const asiaBtn = document.querySelector("#asia-btn")
const mediterraneanBtn = document.querySelector("#mediterranean-btn")

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


//* ----- Sort on Time  --- Manual Fold -----






