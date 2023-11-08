import {
  getAllProductsEndpoint,
  getCategoriesEndpoint,
  getProductDetail,
  postNewProductEndpoint,
  deleteProductEndpoint,
  getAllUsersEndpoint,
  getIfNameExists,
  postSignUpUser,
  //putEditedProduct,
} from "./endpoints"

const GET_ENDPOINTS_CODE = {
  CATEGORY_ALL: getCategoriesEndpoint,
  PRODUCTS_ALL: getAllProductsEndpoint,
  PRODUCT_DETAIL: getProductDetail,
  USERS_ALL: getAllUsersEndpoint,
  EXIST_NAME: getIfNameExists,
}

const POST_ENDPOINTS_CODE = {
  USER_CREATE: postSignUpUser,
  PRODUCT_CREATE: postNewProductEndpoint,
}

// const PUT_ENDPOINTS_CODE = {
//   PRODUCT_EDIT: putEditedProduct,
// }

// const PUT_ENDPOINTS_CODE = {
//   PRODUCT_EDIT: putEditedProduct,
// }

export const getInformationFromEndpoints = async (endpoint, id = "", categoryId = null, page = 1, itemsPerPage  = 10) => {
  const getInfo = async () => {
    const response = await fetch(GET_ENDPOINTS_CODE[endpoint](id, categoryId, page, itemsPerPage)).then((response) => response.json())
    return response
  }
  const dataParsed = await getInfo(id)
    .then((result) => {
      return result
    })
    .catch((e) => e)
  return dataParsed
}

export const postNewInformation = async (endpoint, information) => {
  try {
    const postInfo = async (prod) => {
      const response = await fetch(POST_ENDPOINTS_CODE[endpoint](), {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
        },
        body: JSON.stringify(prod),
      })
        .then((response) => response)
        .catch((err) => err)
      return response
    }

    const postResponse = await postInfo(information).then((result) => result)
    return postResponse
  } catch (error) {
    error
  }
}

export const deleteProduct = async (id) => {
  const deleteInfo = async (productId) => {
    const response = await fetch(deleteProductEndpoint(productId), {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
    })
      .then((response) => response)
      .catch((err) => err)
    return response
  }
  const deleteResponse = await deleteInfo(id)
    .then((result) => result)
    .catch((err) => err)

  return deleteResponse
}

export const putEditedInformation = async (endpoint, information, id) => {
  try {
    const putInfo = async (prod, id) => {
      const response = await fetch(PUT_ENDPOINTS_CODE[endpoint](id), {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
        },
        body: JSON.stringify(prod),
      })
        .then((response) => response)
        .catch((err) => err)
      return response
    }
    const putResponse = await putInfo(information, id).then((result) => result)
    return putResponse
  } catch (error) {
    error
  }
}
