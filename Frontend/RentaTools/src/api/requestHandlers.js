import { getAllProductsEndpoint, getCategoriesEndpoint, getProductDetail, postNewProductEndpoint } from "./endpoints"

const GET_ENDPOINTS_CODE = {
  CATEGORY_ALL: getCategoriesEndpoint,
  PRODUCTS_ALL: getAllProductsEndpoint,
  PRODUCT_DETAIL: getProductDetail,
}

export const getInformationFromEndpoints = async (endpoint, id = "") => {
  const getInfo = async () => {
    const response = await fetch(GET_ENDPOINTS_CODE[endpoint](id)).then((response) => response.json())
    return response
  }
  const dataParsed = await getInfo(id).then((result) => {
    return result
  })
  return dataParsed
}

export const registerNewProduct = async (id = "") => {
  const getInfo = async (dentistId) => {
    const response = await fetch(postNewProductEndpoint(dentistId), {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json())
    return response
  }
  const dataParsed = await getInfo(id).then((result) => {
    return result
  })
  return dataParsed
}
