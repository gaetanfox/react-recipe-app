import React, { useState } from 'react'
import uuidv4 from 'uuid'
import RecipeList from './RecipeList'
import '../css/app.css'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: 'My amount',
        },
      ],
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeList
      recipes={sampleRecipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3.. Eat the chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions:
      '1. Put paprika on pork\n2. Put pork in oven\n3.. Eat the pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '5 pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs',
      },
    ],
  },
]

export default App
