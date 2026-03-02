class Pedido {
    constructor(numeroPedido, cliente, valorTotal, status){
        this.numeroPedido = numeroPedido;
        this.cliente = cliente;
        this.valorTotal = valorTotal;
        this.status = status;
    }

    adicionarValor(valor){
        if (valor > 0){
            this.valorTotal += valor;
        } else {
            return "Valor inválido para acrescimo"
        }
    }

    aplicarDesconto(percentual){
        if (percentual > 0 && percentual <= this.valorTotal) {
            this.valorTotal = this.valorTotal-(this.valorTotal*(percentual/100));
            return this.valorTotal;
        }else {
            return `Desconto inválido!`
        }
    }


    finalizarPedido(){
        return this.valorTotal;
    }
}

let pedido = (new Pedido("12020" ,"Ana", 2000, "Preparando"));

pedido.aplicarDesconto(20);
console.log(
    "Titular do pedido:", pedido.cliente,
    "Numero:", pedido.numeroPedido,
    "Total final:", pedido.finalizarPedido(),
    "Status:", pedido.status);
    