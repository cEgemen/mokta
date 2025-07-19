export const MOCHA_APP_DATA = {

  recipe: {
    name: "Spaghetti Carbonara",
    country: "Italy",
    category: "Main Course",
    servings: 4,
    total_time: "30 min",
    difficulty: "Medium",
    calories_info: {
      per_serving: 520,
      total_calories: 2080,
      protein: "22g",
      carbs: "48g",
      fat: "28g"
    },
    ingredients: [
      {
        name: "Spaghetti",
        amount: "400",
        unit: "g"
      },
      {
        name: "Guanciale or pancetta",
        amount: "150",
        unit: "g"
      },
      {
        name: "Egg yolks",
        amount: "4",
        unit: "pcs"
      },
      {
        name: "Pecorino Romano cheese (grated)",
        amount: "80",
        unit: "g"
      },
      {
        name: "Salt",
        amount: "to taste",
        unit: "pinch"
      },
      {
        name: "Fresh black pepper",
        amount: "1",
        unit: "tsp"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Boil Water",
        description: "Bring a large pot of salted water to boil. Add spaghetti and cook according to package directions (usually 8-10 min).",
        time: "10 min",
        tip: "Water should taste like salty sea water"
      },
      {
        step: 2,
        title: "Prepare Meat",
        description: "Cut guanciale or pancetta into small cubes. Cook in a large pan over medium heat without oil for 4-5 min until golden and crispy.",
        time: "5 min",
        tip: "Meat's own fat is enough, don't add extra oil"
      },
      {
        step: 3,
        title: "Make Sauce",
        description: "In a bowl, mix egg yolks, grated Pecorino Romano cheese and fresh black pepper. Whisk until you get a creamy mixture.",
        time: "3 min",
        tip: "Use freshly grated cheese, not pre-grated"
      },
      {
        step: 4,
        title: "Drain Pasta",
        description: "When spaghetti is al dente, drain it. Reserve 1 cup of pasta water. Add hot pasta directly to the pan with cooked meat.",
        time: "2 min",
        tip: "Don't forget to save pasta water, you'll need it if necessary"
      },
      {
        step: 5,
        title: "Combine",
        description: "Remove pan from heat. Pour egg-cheese mixture over pasta and mix quickly. Add pasta water if needed to get creamy consistency. Keep stirring.",
        time: "3 min",
        tip: "Mix after removing from heat, otherwise eggs will scramble"
      },
      {
        step: 6,
        title: "Serve",
        description: "Warm plates and serve carbonara hot. Grate extra Pecorino Romano on top and sprinkle fresh black pepper. Serve immediately.",
        time: "2 min",
        tip: "Carbonara should be served immediately, loses texture when cold"
      }
    ],
    notes: [
      "Traditional carbonara doesn't use cream",
      "If you can't find guanciale, use pancetta",
      "Parmesan can be used instead of Pecorino Romano",
      "Eggs should be at room temperature"
    ],
    nutrition: {
      calories: 520,
      protein: 22,
      carbs: 48,
      fat: 28,
      fiber: 2,
      sodium: 850
    }
  }
}