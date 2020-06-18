const calculator = require('./calculator')
const prompt = require('prompt-sync')() 

let option = ''

function optionSelected(option) {
  let num1 = 0
  let num2 = 0
  switch (option) {
    case '0':
      break;
    case '1':
      num1 = Number(prompt("Digite o primeiro valor: "))
      num2 = Number(prompt("Digite o segundo valor: "))
      return calculator.sum(num1, num2)
    case '2':
      num1 = Number(prompt("Digite o primeiro valor: "))
      num2 = Number(prompt("Digite o segundo valor: "))
      return calculator.sub(num1, num2)
    case '3':
      num1 = Number(prompt("Digite o primeiro valor: "))
      num2 = Number(prompt("Digite o segundo valor: "))
      return calculator.mult(num1, num2)
    case '4':
      num1 = Number(prompt("Digite o primeiro valor: "))
      num2 = Number(prompt("Digite o segundo valor: "))
      return calculator.div(num1, num2)
    default:
      break;
  }
}

function options() {
  console.log(`
    1 - somar
    2 - subtrair
    3 - multiplicar
    4 - dividir
    0 - sair
  `)
}

while (option !== '0') {
  options()
  option = prompt("Escolha uma opção: ")
  const result = optionSelected(option)
  console.log(result)
}