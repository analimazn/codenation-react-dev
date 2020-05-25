const {
  getProductsById,
  getCategories,
  getTypeOfPromotion,
  totalCountRegularPrice,
  totalCountPromotionPrice,
  totalDiscount,
  percentageOfDiscount,
  makeCar
} = require('../src/product/product')
const { products } = require('../src/data/products');

const productsIdsMock1 = [120, 230, 310, 490]
const productsIdsMock2 = [130, 140, 230, 260]
const productsIdsMock3 = [110, 120, 130, 140]
const productsIdsMock4 = [110, 130, 140, 230, 310, 330]

const promotionsMock = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

describe('Filter Products', () => {
  describe('Products by Ids', () => {
    it('Return 4 products', () => {
      const response = getProductsById(productsIdsMock1, products)
      expect(response.length).toBe(4)
    })

    it('Return 4 products', () => {
      const response = getProductsById(productsIdsMock2, products)
      expect(response.length).toBe(4)
    })

    it('Return 4 products', () => {
      const response = getProductsById(productsIdsMock3, products)
      expect(response.length).toBe(4)
    })

    it('Return 6 products', () => {
      const response = getProductsById(productsIdsMock4, products)
      expect(response.length).toBe(6)
    })
  })
})

describe('Filter Categories', () => {
  describe('Map products per category', () => {
    it('Return an array with 4 categories', () => {
      const productsSelected = getProductsById(productsIdsMock1, products)
      const response = getCategories(productsSelected)

      expect(response.length).toBe(4)
    })

    it('Return an array with 2 categories', () => {
      const productsSelected = getProductsById(productsIdsMock2, products)
      const response = getCategories(productsSelected)

      expect(response.length).toBe(2)
    })

    it('Return an array with 1 categorie', () => {
      const productsSelected = getProductsById(productsIdsMock3, products)
      const response = getCategories(productsSelected)

      expect(response.length).toBe(1)
    })

    it('Return an array with 3 categories', () => {
      const productsSelected = getProductsById(productsIdsMock4, products)
      const response = getCategories(productsSelected)

      expect(response.length).toBe(3)
    })
  })
})

describe('Find type of promotion', () => {
  describe('Get type of promotion', () => {
    it('Return type of promotion equal FULL LOOK', () => {
      const productsSelected = getProductsById(productsIdsMock1, products)
      const categories = getCategories(productsSelected)
      const response = getTypeOfPromotion(categories)

      expect(response).toBe('FULL LOOK')
    })

    it('Return type of promotion equal DOUBLE LOOK', () => {
      const productsSelected = getProductsById(productsIdsMock2, products)
      const categories = getCategories(productsSelected)
      const response = getTypeOfPromotion(categories)

      expect(response).toBe('DOUBLE LOOK')
    })

    it('Return type of promotion equal SINGLE LOOK', () => {
      const productsSelected = getProductsById(productsIdsMock3, products)
      const categories = getCategories(productsSelected)
      const response = getTypeOfPromotion(categories)

      expect(response).toBe('SINGLE LOOK')
    })

    it('Return type of promotion equal TRIPLE LOOK', () => {
      const productsSelected = getProductsById(productsIdsMock4, products)
      const categories = getCategories(productsSelected)
      const response = getTypeOfPromotion(categories)

      expect(response).toBe('TRIPLE LOOK')
    })
  })
})

describe('Calculate price of Products', () => {
  describe('Calculate total price of products using regular price', () => {
    it('Total equal 479.96', () => {
      const productsSelected = getProductsById(productsIdsMock1, products)
      const response = totalCountRegularPrice(productsSelected)

      expect(response).toBe(479.96)
    })

    it('Total equal 529.95', () => {
      const productsSelected = getProductsById(productsIdsMock2, products)
      const response = totalCountRegularPrice(productsSelected)

      expect(response).toBe(529.95)
    })

    it('Total equal 534.96', () => {
      const productsSelected = getProductsById(productsIdsMock3, products)
      const response = totalCountRegularPrice(productsSelected)

      expect(response).toBe(534.96)
    })

    it('Total equal 914.94', () => {
      const productsSelected = getProductsById(productsIdsMock4, products)
      const response = totalCountRegularPrice(productsSelected)

      expect(response).toBe(914.94)
    })
  })

  describe('Calculate total price of products using promotion price', () => {
    it('Total equal 404.96', () => {
      const productsSelected = getProductsById(productsIdsMock1, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const response = totalCountPromotionPrice(productsSelected, promotion)

      expect(response).toBe(404.96)
    })

    it('Total equal 504.95', () => {
      const productsSelected = getProductsById(productsIdsMock2, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const response = totalCountPromotionPrice(productsSelected, promotion)

      expect(response).toBe(504.95)
    })

    it('Total equal 524.96', () => {
      const productsSelected = getProductsById(productsIdsMock3, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const response = totalCountPromotionPrice(productsSelected, promotion)

      expect(response).toBe(524.96)
    })

    it('Total equal 784.94', () => {
      const productsSelected = getProductsById(productsIdsMock4, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const response = totalCountPromotionPrice(productsSelected, promotion)

      expect(response).toBe(784.94)
    })
  })

  describe('Calculate total discount of price', () => {
    it('Total equal 75.00', () => {
      const productsSelected = getProductsById(productsIdsMock1, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const response = totalDiscount(regularPrice, promotionPrice)

      expect(response).toBe(75.00)
    })

    it('Total equal 25.00', () => {
      const productsSelected = getProductsById(productsIdsMock2, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const response = totalDiscount(regularPrice, promotionPrice)

      expect(response).toBe(25.00)
    })

    it('Total equal 10.00', () => {
      const productsSelected = getProductsById(productsIdsMock3, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const response = totalDiscount(regularPrice, promotionPrice)

      expect(response).toBe(10.00)
    })

    it('Total equal 130.00', () => {
      const productsSelected = getProductsById(productsIdsMock4, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const response = totalDiscount(regularPrice, promotionPrice)

      expect(response).toBe(130.00)
    })
  })

  describe('Calculate percentage of discount', () => {
    it('Percentage equal 15.63%', () => {
      const productsSelected = getProductsById(productsIdsMock1, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const discount = totalDiscount(regularPrice, promotionPrice)
      const response = percentageOfDiscount(regularPrice, discount)


      expect(response).toBe('15.63%')
    })

    it('Percentage equal 4.72%', () => {
      const productsSelected = getProductsById(productsIdsMock2, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const discount = totalDiscount(regularPrice, promotionPrice)
      const response = percentageOfDiscount(regularPrice, discount)


      expect(response).toBe('4.72%')
    })

    it('Percentage equal 1.87%', () => {
      const productsSelected = getProductsById(productsIdsMock3, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const discount = totalDiscount(regularPrice, promotionPrice)
      const response = percentageOfDiscount(regularPrice, discount)


      expect(response).toBe('1.87%')
    })

    it('Percentage equal 14.21%', () => {
      const productsSelected = getProductsById(productsIdsMock4, products)
      const categories = getCategories(productsSelected)
      const promotion = getTypeOfPromotion(categories)
      const regularPrice = totalCountRegularPrice(productsSelected)
      const promotionPrice = totalCountPromotionPrice(productsSelected, promotion)
      const discount = totalDiscount(regularPrice, promotionPrice)
      const response = percentageOfDiscount(regularPrice, discount)


      expect(response).toBe('14.21%')
    })
  })

  describe('Make Car', () => {
    it('Get car with informations and total value', () => {
      const response = makeCar(productsIdsMock1, products)
      expect(response).toEqual({ "discount": "15.63%", "discountValue": "75.00", "products": [{ "category": "T-SHIRTS", "name": "DISNEY CRUELLA© T-SHIRT" }, { "category": "PANTS", "name": "KNIT JOGGING PANTS" }, { "category": "SHOES", "name": "ASYMMETRICAL LEATHER SLIDE HEELS" }, { "category": "BAGS", "name": "SOFT FLAP BACKPACK" }], "promotion": "FULL LOOK", "totalPrice": "404.96" })
    })
  })
})
