import { getAllProductsEndpoint, getCategoriesEndpoint, getProductDetail, postNewProductEndpoint, deleteProductEndpoint } from "./endpoints"

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

export const postNewProduct = async (product) => {
  try {
    const postInfo = async (prod) => {
      const response = await fetch(postNewProductEndpoint(), {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
        },
        body: JSON.stringify(prod),
      })
        .then((response) => response)
        .catch((err) => console.error("Error:", err))
      return response
    }

    const postResponse = await postInfo(product).then((result) => result)
    // const postResponse = await postInfo(product)
    //   .then((result) => {
    //     return result
    //   })
    //   .catch((error) => console.error("Error:", error))
    return postResponse
  } catch (error) {
    console.error("Error:", error)
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
