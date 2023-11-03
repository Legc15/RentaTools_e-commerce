import { ContextGlobal, globalStateReducer, initialState } from "./global.context.helper"
import { useReducer } from "react"
import PropTypes from 'prop-types';

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [globalStates, dispatch] = useReducer(globalStateReducer, initialState)
  const { productsList, categories } = globalStates

  const productsAll = (product) => {
    dispatch({ type: "PRODUCTS_ALL", payload: product })
  }

  const categoryAll = (category) => {
    dispatch({ type: "CATEGORY_ALL", payload: category })
  }

  return <ContextGlobal.Provider value={{ productsList, categories, productsAll, categoryAll }}>{children}</ContextGlobal.Provider>
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};