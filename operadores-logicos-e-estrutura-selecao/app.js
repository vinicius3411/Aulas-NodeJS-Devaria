const { read } = require('fs')

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(
  'Esse programa vai checar se voce e maior de 18 anos e tem habilitaçao para saber se voce pode entrar no kart'
)
console.log(
  'Alem de suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario'
)

readLine.question('qual o ano do seu nascimento?', ano => {
  if (ano > 2004) {
    console.log('voce nao tem 18 anos')
  } else {
    readLine.question('voce tem habilitacao? (sim/Nao) ', temHabilitacao => {
      if (!(temHabilitacao.toUpperCase() === 'SIM')) {
        console.log('voce nao tem habilitacao para entrar no kart')
      } else {
        readLine.question('qual seu nome?', nome => {
          switch (nome) {
            case 'Douglas':
              console.log('bem vindo ao kart Douglas')
              break
            case 'Vinicius':
              console.log('bem vindo ao kart Vinicius')
              break
            default:
              console.log('seu nome nao foi identificado na lista de presença')
          }
        })
      }
    })
  }
})
