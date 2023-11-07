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
export const getProductDetailEndpoint = (id) => baseUrl[env] + "products/" + id
export const getIfNameExistsEndpoint = (queryParam) => baseUrl[env] + "products/existname?name=" + queryParam

export const postNewProductEndpoint = () => baseUrl[env] + "products/create"
export const deleteProductEndpoint = (id) => baseUrl[env] + "products/delete/" + id
export const putEditedProductEndpoint = (id) => baseUrl[env] + "products/update/" + id

export const getCategoriesEndpoint = () => baseUrl[env] + "category/all"

export const getAllUsersEndpoint = () => baseUrl[env] + "users/all"
export const postSignUpUserEndpoint = () => baseUrl[env] + "users/create"
export const patchEditedInformationEndpoint = (id) => baseUrl[env] + "users/role/update/" + id
