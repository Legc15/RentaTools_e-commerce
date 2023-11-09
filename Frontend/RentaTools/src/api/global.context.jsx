import { ContextGlobal, globalStateReducer, initialState } from "./global.context.helper"
import { useReducer } from "react"
import PropTypes from "prop-types"

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [globalStates, dispatch] = useReducer(globalStateReducer, initialState)
  const { productsList, categories, users } = globalStates

  const productsAll = (product) => {
    dispatch({ type: "PRODUCTS_ALL", payload: product })
  }

  const categoryAll = (category) => {
    dispatch({ type: "CATEGORY_ALL", payload: category })
  }

  const usersAll = (user) => {
    dispatch({ type: "USERS_ALL", payload: user })
  }
  
  return (
    <ContextGlobal.Provider value={{ productsList, categories, productsAll, categoryAll, users, usersAll }}>
      {children}
    </ContextGlobal.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
