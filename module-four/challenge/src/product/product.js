const {
  getPriceByPromotion,
  formatValue,
  formatStringValue,
  formatProducts
} = require('../utils/utils')

function getProductsById(ids, products) {
  const productsSelected = products.filter(product => ids.includes(product.id))
  return productsSelected
}

function getCategories(productsSelected) {
  let uniqueCategories = productsSelected.map(product => product.category)
  uniqueCategories = [...new Set(uniqueCategories)]
  return uniqueCategories
}

function getTypeOfPromotion(categories) {
  const quantityOfCategories = categories.length
  let promotion = ''

  if (quantityOfCategories === 1) {
    promotion = 'SINGLE LOOK'
  } else if (quantityOfCategories === 2) {
    promotion = 'DOUBLE LOOK'
  } else if (quantityOfCategories === 3) {
    promotion = 'TRIPLE LOOK'
  } else if (quantityOfCategories >= 4) {
    promotion = 'FULL LOOK'
  } else {
    promotion = ''
  }
  return promotion
}

function totalCountRegularPrice(productsSelected) {
  let totalRegularPrice = productsSelected.reduce((acc, product) => {
    acc += product.regularPrice
    return acc
  }, 0)

  totalRegularPrice = formatValue(totalRegularPrice)
  return totalRegularPrice
}

function totalCountPromotionPrice(productsSelected, promotion) {
  const pricesByPromotion = productsSelected.map(product => {
    const promotionPrice = getPriceByPromotion(promotion, product.promotions)
    let price = 0

    if (promotionPrice === 0) {
      price = product.regularPrice
    } else {
      price = promotionPrice
    }

    return price
  })

  let priceByPromotion = pricesByPromotion.reduce((count, price) => {
    count += price
    return count
  }, 0)

  priceByPromotion = formatValue(priceByPromotion)
  return priceByPromotion
}

function totalDiscount(regularPrice, promotionPrice) {
  let discount = regularPrice - promotionPrice
  discount = formatValue(discount)
  return discount
}

function percentageOfDiscount(totalRegularPrice, totalDiscount) {
  let percentageValue = (totalDiscount / totalRegularPrice) * 100
  percentageValue = formatValue(percentageValue)
  const percentage = formatStringValue(percentageValue) + '%'
  return percentage
}

function makeCar(ids, productsList) {
  const productsSelected = getProductsById(ids, productsList)
  const categories = getCategories(productsSelected)
  const typeOfPromotion = getTypeOfPromotion(categories)
  const totalRegularPrice = totalCountRegularPrice(productsSelected)
  const totalPromotionPrice = totalCountPromotionPrice(productsSelected, typeOfPromotion)
  const discount = totalDiscount(totalRegularPrice, totalPromotionPrice)
  const percentage = percentageOfDiscount(totalRegularPrice, discount)

  return {
    products: formatProducts(productsSelected),
    promotion: typeOfPromotion,
    totalPrice: formatStringValue(totalPromotionPrice),
    discountValue: formatStringValue(discount),
    discount: percentage
  }
}

module.exports = {
  getProductsById,
  getCategories,
  getTypeOfPromotion,
  totalCountRegularPrice,
  totalCountPromotionPrice,
  totalDiscount,
  percentageOfDiscount,
  makeCar
}