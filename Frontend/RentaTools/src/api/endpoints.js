import { ENV } from "./constants"

const baseUrl = {
  [ENV.DEVELOPMENT]: "http://3.134.253.70:8080/api/",
  [ENV.PRODUCTION]: "http://3.134.253.70:8080/api/",
}

const env = import.meta.env.MODE.toUpperCase()

export const getAllProductsEndpoint = () => baseUrl[env] + "products/all"
export const postNewProductEndpoint = () => baseUrl[env] + "products/create"
export const deleteProductEndpoint = (id) => baseUrl[env] + "products/delete/" + id
export const getCategoriesEndpoint = () => baseUrl[env] + "category/all"
export const getProductDetail = (id) => baseUrl[env] + "products/" + id
export const getAllUsersEndpoint = () => baseUrl[env] + "users/all"
export const getIfNameExists = (queryParam) => baseUrl[env] + "products/existname?name=" + queryParam
export const postSignUpUser = () => baseUrl[env] + "users/create"
