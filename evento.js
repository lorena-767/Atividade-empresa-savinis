let DataHoje = new Date(2021,12,12)
let DataEvento = new Date(2021,01,12)

if(DataEvento > DataHoje){
    console.log("É Possível fazer o cadastro")
}else{
    console.log("não é possível fazer o cadastro, data inválida")
}

let idade = 18;
if(idade >18){
    console.log("A idade mínima é 18 anos")
}else {
    console.log("Idade aprovada")
}

var listaDeParticipantes = ["lorena","maria","pedro"]

if (listaDeParticipantes.length >= 100) {
    console.log ("Nome inserido na lista")
    }else{
    console.log("Não temos mais vagas")
}
