class Produto{
    constructor(nome, categoria, preco, estoque){
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
    }

    //Métodos: getNome, getPreco
    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }

}

let produtos = [
    new Produto("Notebook", "Tecnologia", 2000, 2),
    new Produto("Escova", "Cosméticos", 20, 60),
    new Produto("Mouse", "Tecnologia", 50, 40)
]

console.log(produtos.length)
for (let i = 0; i< produtos.length; i++){
    console.log(`Nome do Produto:`, produtos[i].getNome(),
                `com Preço:`, produtos[i].getPreco())
}