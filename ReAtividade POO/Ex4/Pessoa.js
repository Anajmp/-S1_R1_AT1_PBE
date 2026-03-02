class Pessoa{
constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

class Professor extends Pessoa{
    constructor(nome, idade, email, disciplina){
        super(nome, idade, email);
        this.disciplina = disciplina;
    }

    darAula(){
        console.log("O professor está dando aula");
    }
}

class Coordenador extends Pessoa{
    constructor(nome, idade, email, setor){
        super(nome, idade, email);
        this.setor = setor;
    }

    organizarReuniao(){
        console.log("O coordenador está organizando a Reunião")
    }
}

const professor = new Professor("Matheus", 25, "matheus@gmail.com", "Backend");
const coordenador = new Coordenador("Tatiane", 30, "tati@gmail.com", "Fundamental 2");

coordenador.organizarReuniao();
professor.darAula();
console.log(coordenador);
console.log(professor);