//* ----- Sort Kitchen btn  --- Manual Fold -----

const kitchenBtns = document.querySelectorAll(".kitchen-btn")


//* ----- Recipie objects  --- Manual Fold -----
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
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
    image: "./chicken.webp",
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
    image: "./chicken.webp",
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
    image: "./chicken.webp",
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
    image: "./chicken.webp",
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
    image: "./chicken.webp",
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
    image: "./chicken.webp",
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

//! ----- Sort Kitchen btn  --- Manual Fold -----

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

//! ----- Sort Time --- Manual Fold -----

// // Varibles  
// const decendBtn = document.querySelector("#decend-btn")
// const acendBtn = document.querySelector("#acend-btn")
// const decendMessage = "decend"
// const acendMessage = "acend"

// const sortTime = (timeActiveBtn, timeNotActiveBtn, message) => {
//   return () => {
//     timeActiveBtn.classList.toggle("time-btn-active")
//     timeNotActiveBtn.classList.remove("time-btn-active")
//     main.innerHTML = (`<h3>You pressed the ${message} button!</h3>`)
//     event.preventDefault();
//   }
// }
