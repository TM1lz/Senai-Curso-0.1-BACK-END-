// Inicio de dependecias //
var readlineSync = require("readline-sync");
const ValorFinalInss = require("./fuc.cal_INSS_IR/soma.inss");
const ValorFinalIR = require("./fuc.cal_INSS_IR/soma.ir");
//Fim de depedencias //

//Const ValorFinalInss e ValorFinalIR vão guardar as taxas do INSS e IR(Imposto de Renda)

//fuc "Main" responsalvel chamada das funcoes de soma e demais aticvidades
async function Main() {
  //ValorBrutoSalario vai receber o salario bruto do usuario
  // inicio  visao do usuario
  const ValorBrutoSalario = readlineSync.question(
    "[NODE] - FileSystem\n Data da atividade : 10 de agosto\nSera feito um calculo dos descontos de INSS e IR.\n\nPor favor, digite o salario para calcular esses descontos: "
  );
  //fim de visao do usario
  //Inicos das depedencias
  //São funcoes externas alocadas em "fuc.cal_INSS_IR" para afins de organizacao no codigo
  const INSS = () => {
    return ValorFinalInss(ValorBrutoSalario);
  };
  const IR = () => {
    return ValorFinalIR(ValorBrutoSalario);
  };
  //Valores pegos e tratados , para nao ficar com mais de 2 digitos
  try {
    var salarioBruto = await ValorBrutoSalario;
    var descontoINSS = await INSS().toFixed(2);
    var descontoIR = await IR();
  } catch (error) {}

  //Fim de depedencias
  //Esse 'if' é tratamento de erro caso INSS seja undefined ou se IR seja undefined
  //Inicio da visao do usuario
  if (INSS() === undefined) {
    console.log(
      "Seu Salario ou é invalido ou é menor que o salario min no Brasil"
    );
  } else {
    //Se desconte IR seja undefined ira receber o valor 0
    if (descontoIR === undefined) {
      await console.log(`
            Em sua folha de pagamento, são descontados o INSS e o IR (caso seu salário seja acima de R$ 2.112,00).
             
            Salário Bruto: R$ ${salarioBruto}
            Desconto INSS: R$ ${descontoINSS}
            Desconto IR: R$ 0
            Salário Liquido : R$ ${ValorBrutoSalario - INSS()}
            `);
    } else {
      await console.log(`
            Em sua folha de pagamento, são descontados o INSS e o IR (caso seu salário seja acima de R$ 2.112,00).
             
            Salário Bruto: R$ ${salarioBruto}
            Desconto INSS: R$ ${descontoINSS}
            Desconto IR: R$ ${descontoIR.toFixed(2)}
            Salário Liquido : R$ ${salarioBruto - (IR() + INSS())}
            `);
    }
  }
  //Fim da Visao do ususario
}

Main();
