// // let listaNumerosA: number[] = [2, 6, 9, 7, 5, 3, 1, 8, 10, 11];
// // let listaNumerosB: number[] = [];
// // let listaNumerosC: number[] = [];
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Aluno_Nome, _Aluno_Idade, _Aluno_Altura, _Aluno_Sexo;
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
var Alunos = [];
var MediaAltura = 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, altura, sexo) {
        _Aluno_Nome.set(this, void 0);
        _Aluno_Idade.set(this, void 0);
        _Aluno_Altura.set(this, void 0);
        _Aluno_Sexo.set(this, void 0);
        this.DefinirNome(nome);
        this.DefinirIdade(idade);
        this.DefinirAltura(altura);
        this.DefinirSexo(sexo);
    }
    Aluno.prototype.DefinirNome = function (nome) {
        __classPrivateFieldSet(this, _Aluno_Nome, nome, "f");
    };
    Aluno.prototype.DefinirIdade = function (idade) {
        __classPrivateFieldSet(this, _Aluno_Idade, idade, "f");
    };
    Aluno.prototype.DefinirAltura = function (altura) {
        __classPrivateFieldSet(this, _Aluno_Altura, altura, "f");
    };
    Aluno.prototype.DefinirSexo = function (sexo) {
        __classPrivateFieldSet(this, _Aluno_Sexo, sexo, "f");
    };
    Aluno.prototype.GetNome = function () {
        return __classPrivateFieldGet(this, _Aluno_Nome, "f");
    };
    Aluno.prototype.GetIdade = function () {
        return __classPrivateFieldGet(this, _Aluno_Idade, "f");
    };
    Aluno.prototype.GetAltura = function () {
        return __classPrivateFieldGet(this, _Aluno_Altura, "f");
    };
    Aluno.prototype.GetSexo = function () {
        return __classPrivateFieldGet(this, _Aluno_Sexo, "f");
    };
    Aluno.prototype.ProcurarAlturaAlunos = function () {
        var MediaAltura = this.DefinirMedia();
        var AlunosAlturaAbaixoDaMedia = [];
        for (var i = 0; i < Alunos.length; i++) {
            if (Alunos[i].GetIdade() > 13 && Alunos[i].GetAltura() < MediaAltura) {
                AlunosAlturaAbaixoDaMedia.push(Alunos[i].GetNome());
            }
        }
        return AlunosAlturaAbaixoDaMedia;
    };
    Aluno.prototype.ProcurarMaiorAlturaMulheres = function () {
        var MaiorAltura = 0;
        for (var index = 0; index < Alunos.length; index++) {
            if (Alunos[index].GetAltura() > MaiorAltura && Alunos[index].GetSexo() == "Feminino") {
                MaiorAltura = Alunos[index].GetAltura();
            }
        }
        return MaiorAltura;
    };
    Aluno.prototype.ProcurarAlunoMaisNovoMasculino = function () {
        var MenorIdade = 0;
        var NomeAlunoMenorIdade;
        Alunos.forEach(Finder);
        function Finder(item) {
            if (item.GetSexo() == "Masculino") {
                MenorIdade = item.GetIdade();
                Alunos.forEach(Verificate);
            }
        }
        function Verificate(item) {
            if (item.GetIdade() < MenorIdade) {
                NomeAlunoMenorIdade = item.GetNome();
            }
        }
        return NomeAlunoMenorIdade;
    };
    Aluno.prototype.ProcurarIdadeEAlturaAlunos = function () {
        var NomeAluno;
        Alunos.forEach(Verificate);
        return NomeAluno;
        function Verificate(item) {
            if (item.GetIdade() % 2 == 0 || item.GetAltura() > 1.90) {
                NomeAluno = item.GetNome();
            }
        }
    };
    Aluno.prototype.DefinirMedia = function () {
        for (var i = 0; i < Alunos.length; i++) {
            MediaAltura = MediaAltura + Alunos[i].GetAltura();
        }
        MediaAltura = MediaAltura / Alunos.length;
        return MediaAltura;
    };
    return Aluno;
}());
_Aluno_Nome = new WeakMap(), _Aluno_Idade = new WeakMap(), _Aluno_Altura = new WeakMap(), _Aluno_Sexo = new WeakMap();
var NewAluno1 = new Aluno("Gabriel", 20, 1.70, "Masculino");
var NewAluno2 = new Aluno("Arthur", 17, 1.80, "Masculino");
var NewAluno3 = new Aluno("Joao", 13, 1.65, "Masculino");
var NewAluno4 = new Aluno("Giovanna", 25, 1.63, "Feminino");
var NewAluno5 = new Aluno("Ana", 19, 1.55, "Feminino");
Alunos.push(NewAluno1, NewAluno2, NewAluno3, NewAluno4, NewAluno5);
console.log(NewAluno1.ProcurarAlturaAlunos());
console.log(NewAluno1.ProcurarMaiorAlturaMulheres());
console.log(NewAluno1.ProcurarAlunoMaisNovoMasculino());
console.log(NewAluno1.ProcurarIdadeEAlturaAlunos());
