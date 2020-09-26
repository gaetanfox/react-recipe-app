import React from 'react'

function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }

  return (
    <>
      <input
        type='text'
        className='recipe-edit__input'
        onInput={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        type='text'
        className='recipe-edit__input'
        onInput={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button className='btn btn--danger'>&times;</button>
    </>
  )
}

export default RecipeIngredientEdit
