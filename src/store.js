import {createStore} from 'redux'

let initialState = {
  name: '',
  category:'',
  authFirst: '',
  authLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
}

export  const NAME_CHANGE = 'NAME_CHANGE'
export  const CATEGORY_CHANGE = 'CATEGORY_CHANGE'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const RECIPES = 'RECIPES'
export const CLEAR = 'CLEAR'
export const DELETE = 'DELETE'

function reducer (state=initialState, action) {
  switch(action.type){
    case NAME_CHANGE:
      return {...state, name: action.payload}
    case CATEGORY_CHANGE:
      return {...state, category: action.payload}
    case FIRST_NAME:
      return {...state, authFirst: action.payload}
    case LAST_NAME:
      return {...state, authLast: action.payload}
    case INGREDIENTS:
      return {...state, ingredients: [...state.ingredients, action.payload]}
    case INSTRUCTIONS:
      return {...state, instructions: [...state.instructions, action.payload]}
    case RECIPES:
      return {...state, recipes: [...state.recipes, {
        name: state.name,
        category: state.category,
        authorFirst: state.authFirst,
        authorLast: state.authLast,
        ingredients: state.ingredients,
        instructions: state.instructions
      }]}
    case CLEAR:
      return {...state, name: '', category: '', authFirst: '', authLast: '', ingredients: [], instructions: []}
    case DELETE:
      let newRecipes = [...state.recipes]
      newRecipes.splice(action.payload, 1)
      return {...state, recipes: newRecipes}
    default:
      return state
  }
}

export default createStore(reducer)
