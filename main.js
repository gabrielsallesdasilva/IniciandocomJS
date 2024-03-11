// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.')
alert("Hello World!")

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
alert('2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.')

let valor1 = Number(prompt("Informe o primeiro valor: "));
let valor2 = Number(prompt("Informe o segundo valor: "));

let resultado = valor1 + valor2;

alert(`${valor1} + ${valor2} = ${resultado}`);

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

alert(`3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número"`);

const isNumber = 10

if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

alert(`4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".`)

const isString = 'isso eh uma string'

if (typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano"

alert(`5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano"`)

const isBooleano = true

if(typeof isBooleano == 'boolean'){
  alert("É um booleano")
}else{
  alert("Não é um booleano")
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

alert(`6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.`)

let sub = valor1 - valor2

alert(`A subtração do ${valor1} - ${valor2} = ${sub}`);

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas

alert(`7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas`)

let mult = valor1 * valor2

alert(`A multiplicação de ${valor1} por ${valor2} = ${mult}`)

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

alert(`8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.`)

let divisao = valor1 / valor2

alert(`A divisão de ${valor1} por ${valor2} = ${divisao}`)

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

alert("9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem 'É um número par', caso contrário, exiba a mensagem 'Não é um número par'.")

let parOuImpar = Number(prompt("Informe um número: "))

if(parOuImpar % 2 == 0){
  alert(`O número ${parOuImpar} é um número par!`)
}else{
  alert(`O número ${parOuImpar} não é um número par!`)
}

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

alert("10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem 'É um número ímpar', caso contrário, exiba a mensagem 'Não é um número ímpar'.")

let parOuImpar2 = Number(prompt("Informe um número: "))

if(parOuImpar2 % 2 == 1){
  alert(`O número ${parOuImpar2} é um número ímpar!`)
}else{
  alert(`O número ${parOuImpar2} não é um número ímpar!`)
}