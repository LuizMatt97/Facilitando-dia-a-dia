import readlineSync from "readline-sync";

const propriedade = [] 
let input = "";

while(input != "sair"){
    propriedade.push(input);
    input = readlineSync.question('Digite uma propriedade CSS:').toLocaleLowerCase()
    
}
console.log(propriedade.sort().join('\n'));
