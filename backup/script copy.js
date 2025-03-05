//* ----- Recipie objects  --- Manual Fold -----
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "https://www.eatingwell.com/thmb/AZdGSagOj8VtZPnpcVdD8ttRk3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-lentil-stew-0b016185b40446ba98409c75dfeaef7f.jpg",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "https://cdn5.projectmealplan.com/wp-content/uploads/2024/05/roasted-veggies-pesto-pasta-salad-hero-top.jpg",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "https://images.themodernproper.com/production/posts/2019/crispy-chicken-stir-fry-with-blistered-green-beans-9.jpg?w=1200&q=82&auto=format&fit=crop&dm=1613150922&s=c4f37d4e0ce6ca97ed8093feb128718e",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "https://oliviaadriance.com/wp-content/uploads/2023/07/Final_3_Crispy_Baked_Beef_Tacos_grain-free-dairy-free-500x500.jpg",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "https://toriavey.com/images/2010/07/Hummus-IMAGE-9-1-500x500.jpg",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "https://www.eatingbirdfood.com/wp-content/uploads/2023/12/avocado-toast-hero-cropped.jpg",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "https://www.skinnytaste.com/wp-content/uploads/2023/10/Beef-Stew-Recipe-10.jpg",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

//* ----- Create recipe cars  --- Manual Fold -----
const recipesPlaceholder = document.querySelector("#recipes-placeholder")

const renderRecipes = () => {
  recipesPlaceholder.innerHTML = ""

  recipes.forEach(recipe => {
    const recipeCard = document.createElement("article")
    recipeCard.classList.add("recipe-card")

    const foodImgBg = document.createElement("div")
    foodImgBg.classList.add("food-img-bg")

    const imgFoodCard = document.createElement('img')
    imgFoodCard.classList.add("img-food-card")
    imgFoodCard.src = recipe.image
    imgFoodCard.alt = recipe.title

    const foodCardText = document.createElement("div")
    foodCardText.classList.add("img-food-card")

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
      <strong>Price per serving:</strong> $${recipe.pricePerServing}<br>
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

// renderRecipes()

//* ----- Sort on kitchen  --- Manual Fold -----
// const asiaBtn = document.querySelector("#asia-btn")
// const mexicoBtn = document.querySelector("#mexico-btn")
// const italyBtn = document.querySelector("#italy-btn")
// const usaBtn = document.querySelector("#usa-btn")

// const filterRecipes = (cusine, event) => {
//   return (event) => {
//     event.preventDefault()  // Prevent the default action
//     if (recipes.filter(item => item.cuisine === cusine)) {
//       console.log("Filtered recipes for cuisine:", cusine)

//     }
//   }
// }

// renderRecipes()

// asiaBtn.onclick = filterRecipes("Asian")
// mexicoBtn.onclick = filterRecipes("Mexican")
// italyBtn.onclick = filterRecipes("Italian")
// usaBtn.onclick = filterRecipes("Mediterranean")


//* ----- Sort on Time  --- Manual Fold -----
const decendBtn = document.querySelector("#decend-btn")
const acendBtn = document.querySelector("#acend-btn")

const SortOnTimeDecend = (activeBtn, notActiveBtn) => {
  // event.preventDefault()
  notActiveBtn.classList.remove("time-btn-active")
  activeBtn.classList.toggle("time-btn-active")
  if (!activeBtn.classList.contains("time-btn-active") && !notActiveBtn.classList.contains("time-btn-active")) {
    recipes.sort((a, b) => a.id - b.id)
  } else {
    recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes)
    decendBtn.addEventListener("click", renderRecipes)
  }
  renderRecipes()
}


// Sorting by acending ready in time 
const SortOnTimeAcend = (activeBtn, notActiveBtn) => {
  // event.preventDefault()
  notActiveBtn.classList.remove("time-btn-active")
  activeBtn.classList.toggle("time-btn-active")
  if (!activeBtn.classList.contains("time-btn-active") && !notActiveBtn.classList.contains("time-btn-active")) {
    recipes.sort((a, b) => a.id - b.id)
  } else {
    recipes.sort((a, b) => b.readyInMinutes - a.readyInMinutes)
    decendBtn.addEventListener("click", renderRecipes)
  }

  renderRecipes()
}


// calls both sort on time function
acendBtn.addEventListener("click", () => SortOnTimeAcend(acendBtn, decendBtn))
// decendBtn.onclick = SortOnTimeDecend(decendBtn, () => (acendBtn))



