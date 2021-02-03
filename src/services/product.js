import data from './mockData.json'

// Mock api call to get product list
const getProductList = (page = 0, size = 10) => {
  return Promise.resolve({
    ...data.data.resultValue[201711102],
    paging: {
      totalItem: 30,
      totalPage: 3,
      pageSize: 30,
      currentPage: page
    },
    data: data.data.resultValue[201711102].data.slice(page * size, page * size + size)
  })
}

// Mock api call to get product detail
const getProductDetail = (id) => {
  return Promise.resolve(data.data.resultValue[201711102].data.find(item => item.itemId === id))
}

export {
  getProductList,
  getProductDetail
}
