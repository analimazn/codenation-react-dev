const {
  getPriceByPromotion,
  formatValue,
  formatStringValue,
  formatProducts
} = require('../src/utils/utils')

const typeOfPromotion = 'FULL LOOK'
const promotionsMock = {
  "promotions": [
    {
      "looks": ["SINGLE LOOK", "DOUBLE LOOK"],
      "price": 99.99
              },
      {
        "looks": ["TRIPLE LOOK"],
          "price": 94.99
      },
      {
        "looks": ["FULL LOOK"],
          "price": 89.99
      }
  ]
}
const priceMock = 89.000000000

const productMock = {
  "products": [
    {
      "id": 110,
      "name": "PINK PANTHER™ T-SHIRT",
      "category": "T-SHIRTS",
      "regularPrice": 124.99,
      "promotions": [
        {
          "looks": ["SINGLE LOOK", "DOUBLE LOOK"],
          "price": 124.99
        },
        {
          "looks": ["TRIPLE LOOK", "FULL LOOK"],
          "price": 109.99
        }
      ]
    },
    {
      "id": 120,
      "name": "DISNEY CRUELLA© T-SHIRT",
      "category": "T-SHIRTS",
      "regularPrice": 114.99,
      "promotions": [
        {
          "looks": ["SINGLE LOOK", "DOUBLE LOOK"],
          "price": 109.99
        },
        {
          "looks": ["TRIPLE LOOK", "FULL LOOK"],
          "price": 99.99
        }
      ]
    }
  ]
}

describe('Format Price Value', () => {
  it('Return a float value fixed 2', () => {
    const response = formatValue(priceMock)
    expect(response).toBe(89)
  })
})

describe('Format Price Value to String', () => {
  it('Return a float value fixed 2', () => {
    const response = formatStringValue(priceMock)
    expect(response).toBe("89.00")
  })
})

describe('Filter price by promotion', () => {
  describe('Price by promotion', () => {
    it('Return FULL LOOK price like be 89.99', () => {
      const response = getPriceByPromotion(typeOfPromotion, promotionsMock.promotions)
      expect(response).toBe(89.99)
    })
  })
})

describe('Format products with name and category', () => {
  it('Return an array with two object with name and category', () => {
    const response = formatProducts(productMock.products)
    expect(response).toEqual([
      { name: 'PINK PANTHER™ T-SHIRT', category: 'T-SHIRTS' },
      { name: 'DISNEY CRUELLA© T-SHIRT', category: 'T-SHIRTS' }
    ])
  })
})