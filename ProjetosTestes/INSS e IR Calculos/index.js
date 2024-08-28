// Inicio de dependecias //
var readlineSync = require("readline-sync");
const ValorFinalInss = require('./fuc.cal_INSS_IR/soma.inss');
const ValorFinalIR = require('./fuc.cal_INSS_IR/soma.ir');
//Fim de depedencias //

//Const ValorFinalInss e ValorFinalIR vão guardar as taxas do INSS e IR( Imposto de Renda)//

//fuc "Main" responsalvel chamada das funcoes de soma e demais aticvidades//
async function Main() {
    //ValorBrutoSalario vaiu receber o salario bruto do usuario//
    const ValorBrutoSalario = readlineSync.question("Qual seu salario Bruto ")
    
    const INSS = ()=>{return ValorFinalInss(ValorBrutoSalario)}
    const IR = ()=>{return ValorFinalIR(ValorBrutoSalario)}
   await console.log(`Em sua folha de pagamento é descontato o INSS e o IR(caso seu salario for acima de 2.112,00), seu salario bruto é : ${ValorBrutoSalario} , seu salario liquido é: ${ ValorBrutoSalario - INSS() - IR() }, IR: ${IR()}
   e seu INSS é ${INSS()}`)
}

Main()