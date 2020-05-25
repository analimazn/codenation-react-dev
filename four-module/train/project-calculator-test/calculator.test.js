const calculator = require('./calculator')

// suit tests
describe('calculator', () => {
  it('sum test', () => {
    const number1 = 5
    const number2 = 5

    expect(calculator.sum(number1, number2)).toBe(10)
  })

  it('sub test', () => {
    const number1 = 5
    const number2 = 5

    expect(calculator.sub(number1, number2)).toBe(0)
  })

  it('mult test', () => {
    const number1 = 5
    const number2 = 5

    expect(calculator.mult(number1, number2)).toBe(25)
  })

  it('div test', () => {
    const number1 = 5
    const number2 = 5

    expect(calculator.div(number1, number2)).toBe(1)
  })
})