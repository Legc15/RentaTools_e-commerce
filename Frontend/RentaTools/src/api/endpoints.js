import { ENV } from "./constants"

const baseUrl = {
  [ENV.DEVELOPMENT]: "http://3.134.253.70:8080/api/",
  [ENV.PRODUCTION]: "http://3.134.253.70:8080/api/",
}

const env = import.meta.env.MODE.toUpperCase()

export const getAllProductsEndpoint = () => baseUrl[env] + "products/all"
export const getProductsByQueryParamsEndpoint = (queryParams) => {
  const queryParamURL = Object.entries(queryParams)
    .map(([key, val]) => `${key}=${val}`)
    .join("&")
  return baseUrl[env] + "products/paginated?" + queryParamURL
}

export const getProductsBySearch = ({ searchBar }) => {
  return baseUrl[env] + "products/search?searchBar=" + searchBar
}

export const postAddFavoriteEndpoint = () => baseUrl[env] + "favorite"
export const deleteFavoriteEndpoint = () => baseUrl[env] + "favorite/delete"

export const postFavoritesEndpoint = (id) => baseUrl[env] + "favorite/update/" + id
export const getAllFavoritesEndpoint = ({ id }) => baseUrl[env] + "favorite/user/" + id

export const getProductDetailEndpoint = ({ id }) => baseUrl[env] + "products/" + id
export const getIfNameExistsEndpoint = ({ parsedName }) => baseUrl[env] + "products/existname?name=" + parsedName

export const postNewProductEndpoint = () => baseUrl[env] + "products/create"
export const postNewImagesEndpoint = () => baseUrl[env] + "images/create"
export const deleteProductEndpoint = (id) => baseUrl[env] + "products/delete/" + id
export const putEditedProductEndpoint = (id) => baseUrl[env] + "products/update/" + id

export const getCategoriesEndpoint = () => baseUrl[env] + "category/all"
export const putCategoriesEndpoint = () => baseUrl[env] + "category/update"
export const postCategoriesEndpoint = () => baseUrl[env] + "category/create"
export const deleteCategoriesEndpoint = (id) => baseUrl[env] + "category/delete/" + id

export const getAllUsersEndpoint = () => baseUrl[env] + "users/all"
export const getUserEndpoint = ({ id }) => baseUrl[env] + "users/" + id
export const postSignUpUserEndpoint = () => baseUrl[env] + "users/create"
export const patchEditedInformationEndpoint = (id) => baseUrl[env] + "users/role/update/" + id
export const postUserValidationEndpoint = () => baseUrl[env] + "auth/login"

export const getFeaturesAllEndpoint = () => baseUrl[env] + "feature/all"

export const getSearchEndpoint = () => baseUrl[env] + "products/search"
export const getSearchSuggestionsEndpoint = ({ barString }) => baseUrl[env] + "products/suggestion?barString=" + barString

export const getReservationsByUserEndpoint = ({ id }) => baseUrl[env] + "reservation/user/" + id
export const getReservationsByProductEndpoint = ({ id }) => baseUrl[env] + "reservation/product/" + id
export const postNewReservationSEndpoint = () => baseUrl[env] + "reservation/create"
