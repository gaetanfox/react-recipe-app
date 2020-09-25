import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

function RecipeEdit() {
  return (
    <div className='recipe-edit'>
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='cookTime'>Cook Time</label>
        <input type='text' id='cookTime' name='cookTime' />
        <label htmlFor='servings'>Servings</label>
        <input type='number' min='1' id='servings' name='servings' />
        <label htmlFor='instructions'>Instructions</label>
        <textarea name='instructions' id='instructions'></textarea>
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  )
}

export default RecipeEdit
