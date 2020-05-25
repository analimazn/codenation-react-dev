function getPriceByPromotion(typeOfPromotion, promotions) {
  const price = promotions.reduce((price, promotion) => {
    if (promotion.looks.includes(typeOfPromotion)) {
      price = promotion.price
      return price
    }
    return price
  }, 0)

  return price
}

function formatValue(value) {
  return parseFloat(value.toFixed(2))
}

function formatStringValue(value) {
  let newValue = String(parseFloat(value.toFixed(2)))
  const hasZerosLength = newValue.split('.').length
  if (hasZerosLength === 1) {
    newValue = newValue + '.00'
  }
  return newValue
}

function formatProducts(products) {
  const newProducts = products.map(product => {
    return {
      name: product.name,
      category: product.category
    }
  })
  return newProducts
}

module.exports = {
  getPriceByPromotion,
  formatValue,
  formatStringValue,
  formatProducts
}