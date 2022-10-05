

// // let listaNumerosA: number[] = [2, 6, 9, 7, 5, 3, 1, 8, 10, 11];
// // let listaNumerosB: number[] = [];
// // let listaNumerosC: number[] = [];

// // listaNumerosA.forEach(Verificate);

// // console.log(listaNumerosA);
// // console.log(listaNumerosB);
// // console.log(listaNumerosC);

// // function Verificate(item: number): void {
// //   if (item % 2 == 0) {
// //     listaNumerosB.push(item);
// //   } else {
// //     listaNumerosC.push(item);
// //   }
// // }

// let arrayA: number[] = [5, 6, 2, 4, 8, 7, 3, 6, 7, 1],
//   arrayB: number[] = [8, 5, 3, 1, 4, 7, 8, 2, 3, 6],
//   arrayC: number[] = [];

// arrayA.forEach(check);

// function check(item: number, index: number): void {
//   if (arrayA.includes(arrayB[index]) && arrayB[index] >= 5) {
//     arrayC.push(arrayB[index]);
//   }
// }
// console.log(`ArrayA: ${arrayA} \nArrayB: ${arrayB} \nArrayC: ${arrayC}`);


let Alunos: object[] = []
let MediaAltura: number = 0

class Aluno {
  #Nome: string;
  #Idade: number;
  #Altura: number;
  #Sexo: string;

  constructor(nome: string, idade: number, altura: number, sexo: string){
    this.DefinirNome(nome)
    this.DefinirIdade(idade)
    this.DefinirAltura(altura)
    this.DefinirSexo(sexo)
  }

  DefinirNome(nome: string){
    this.#Nome = nome
  }

  DefinirIdade(idade: number){
    this.#Idade = idade
  }

  DefinirAltura(altura: number){
    this.#Altura = altura
  }

  DefinirSexo(sexo: string){
    this.#Sexo = sexo
  }

  GetNome(): string{
    return this.#Nome
  }

  GetIdade(): number{
    return this.#Idade
  }

  GetAltura(): number{
    return this.#Altura
  }

  GetSexo(): string{
    return this.#Sexo
  }

  ProcurarAlturaAlunos(): []{
    let MediaAltura: number = this.DefinirMedia()
    let AlunosAlturaAbaixoDaMedia: [] = []

    for(let i = 0; i < Alunos.length; i++){

      if(Alunos[i].GetIdade() > 13 && Alunos[i].GetAltura() < MediaAltura){
          AlunosAlturaAbaixoDaMedia.push(Alunos[i].GetNome())
      }

    }

    return AlunosAlturaAbaixoDaMedia

  }

  ProcurarMaiorAlturaMulheres(): number{
    let MaiorAltura: number = 0

    for(let index = 0; index < Alunos.length; index++){

      if(Alunos[index].GetAltura() > MaiorAltura && Alunos[index].GetSexo() == "Feminino"){
        MaiorAltura = Alunos[index].GetAltura()
      }

    }

    return MaiorAltura
  }

  ProcurarAlunoMaisNovoMasculino(): string{
    let MenorIdade: number = 0
    let NomeAlunoMenorIdade: string

    Alunos.forEach(Finder)

    function Finder(item: object){
      if(item.GetSexo() == "Masculino"){
          MenorIdade = item.GetIdade()

          Alunos.forEach(Verificate)
      }
    }

    function Verificate(item: object){
      if(item.GetIdade() < MenorIdade){
        NomeAlunoMenorIdade = item.GetNome()
      }
    }

    return NomeAlunoMenorIdade
  }

  ProcurarIdadeEAlturaAlunos(): string{
    let NomeAluno: string

    Alunos.forEach(Verificate)

    return NomeAluno

    function Verificate(item: object){

      if(item.GetIdade() % 2 == 0 || item.GetAltura() > 1.90){
        NomeAluno = item.GetNome()
      }

    }
    
  }

  DefinirMedia(): number{

    for(let i = 0; i < Alunos.length; i++){
      MediaAltura = MediaAltura + Alunos[i].GetAltura()
    }

    MediaAltura = MediaAltura / Alunos.length

    return MediaAltura
  }
}


let NewAluno1 = new Aluno("Gabriel", 20, 1.70, "Masculino")
let NewAluno2 = new Aluno("Arthur", 17, 1.80, "Masculino")
let NewAluno3 = new Aluno("Joao", 13, 1.65, "Masculino")
let NewAluno4 = new Aluno("Giovanna", 25, 1.63, "Feminino")
let NewAluno5 = new Aluno("Ana", 19, 1.55, "Feminino")

Alunos.push(NewAluno1, NewAluno2, NewAluno3, NewAluno4, NewAluno5)

console.log(NewAluno1.ProcurarAlturaAlunos())
console.log(NewAluno1.ProcurarMaiorAlturaMulheres())
console.log(NewAluno1.ProcurarAlunoMaisNovoMasculino())
console.log(NewAluno1.ProcurarIdadeEAlturaAlunos())


