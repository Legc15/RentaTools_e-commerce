/* eslint-disable react/prop-types */
import { createContext } from "react"

export const initialState = { productsList: [], categories: [] }

export const ContextGlobal = createContext(undefined)

export const globalStateReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_ALL":
      return { ...state, productsList: action.payload }
    case "CATEGORY_ALL":
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
