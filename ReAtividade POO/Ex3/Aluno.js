class Aluno{
    constructor(nome, matricula, notaFinal){
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = notaFinal;
    }

    //Métodos: getNome, getMatricula, getNotaFinal, setNotaFinal

    getNome(){
        return this.nome;
    }

    getMatricula(){
        return this.cargo;
    }

    getNotaFinal(){
        return this.notaFinal;
    }

    setNotaFinal(valor){
        if (valor >= 0 && valor <= 10){
            this.notaFinal = valor;
        } else {
            return "Nota deve ser de 0 a 10"
        }
    }

}

let aluno = [
    new Aluno("Ana", "0202" ),
    new Aluno("Kaique", "0303"),
    new Aluno("Julia", "0404")
]

aluno[0].setNotaFinal(9);
console.log(aluno[0]);
