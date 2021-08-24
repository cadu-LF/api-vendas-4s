
// criando variável isValid como sendo boolean
let motor: boolean;
motor = true;

// tio number pode ser qualquer valor numérico(short, int, long, double, float)
let idade: number; 
idade = 19;

let nome: string;
nome = "Cadu Lourenço";

console.log(`Motor: ${motor} - Nome: ${nome} - Idade: ${idade}`);

//o tipo any, permite colocar qualquer tipo de dado 
let coisa: any;
coisa = 10;
coisa = 'dez';
coisa = true;

// crialção de vetor
let jogadores = ['AD', 'LeBron', 'Melo', 'Westbrook'];
let times: Array<string> = ['Lakers', 'Warrios', 'Celtics', 'Heat']

console.log(jogadores)
console.log(times)

// exemplo de iterface
interface Aluno{
  nome: string;
  nota: number;
  aprovado: boolean;
  setAprovado(): boolean;
  situacao(): string; // função que n retorna nada
}

let fulano: Aluno = {
  nome: 'Mineiro',
  nota: 8,
  aprovado: false,
  setAprovado: function (){
    if(this.nota >= 6){
      return true;
    }
    else{
      return false;
    }
  },
  situacao: function(){
    if(this.aprovado){
      return("Aprovado")
    }
    else{
      return('Reprovado')
    }
  }
}
console.log(fulano)
console.log(fulano.setAprovado())

// interface com classe
interface Saudacao{
  bomDia(): string,
  boaTarde(): string
}


// implatar herança

//cria a classe
class Funcionario{
  // variável protegida q pode ser herdada  
  protected atividade: string
  // contrutor
  constructor(atividade: string){
    this.atividade = atividade
  }

  public excercerCargo(): void{
    console.log(`A atividade é: ${this.atividade}`)
  }
}
class Docente extends Funcionario implements Saudacao{
  
  private nome: string;

  constructor(nome: string, atividade: string){
    super(atividade) // chama construtor da classe pai (Fnuncionario)
    this.nome = nome
  }

  bomDia(): string{
    // pode ser executada, pois herdou de Funcionario
    this.excercerCargo()
    return `Boa dia ${this.nome}`
  }
  boaTarde(): string{
    this.excercerCargo()
    return `Boa tarde ${this.nome}`
  }
}

let obj = new Docente('Carlão', 'professor')
console.log(obj.bomDia())
console.log(obj.boaTarde())

