class Vendedor {
  nome
  cargo
  vendas = []
  comissao = 0
  totalVendas = 0
  
  calcularComissao() {
    this.comissao = this.totalVendas * this.cargo.percentual
  }

  calcularTotalDeVendas() {
    this.vendas.forEach((produto) => {
      this.totalVendas = this.totalVendas + produto.valor
    })
    
    this.totalVendas = this.totalVendas.toFixed(2)
  }
}

class Venda {
  valor
  
  constructor(valor) {
    this.valor = valor
  }
}

class Cargo {
  nome
  percentual
}

class Produto{
  nome
  valor
  constructor(nome, valor){
    this.nome = nome
    this.valor = valor
  }
}

var vendedor1 = new Cargo()
vendedor1.nome = "Vendedor Nível 1"
vendedor1.percentual = 0.05

var vendedor2 = new Cargo()
vendedor2.nome = "Vendedor Nível 2"
vendedor2.percentual = 0.1

var joaozinho = new Vendedor()
joaozinho.nome = "João"
joaozinho.cargo = vendedor1

nome1 = prompt("Digite o nome do produto")
valor1 = prompt("Digite o valor do produto")
parseFloat(valor1)
var produto1 = new Produto(nome1, valor1)

nome2 = prompt("Digite o nome do produto")
valor2 = prompt("Digite o valor do produto")
parseFloat(valor2)
var produto2 = new Produto(nome2, valor2)


joaozinho.vendas.push(produto1)
joaozinho.vendas.push(produto2)

joaozinho.calcularTotalDeVendas()
joaozinho.calcularComissao()

console.log(joaozinho)
