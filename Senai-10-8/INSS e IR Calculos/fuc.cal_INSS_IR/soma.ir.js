const ValorFinalIR = (SalarioBruto) => {
  //O 'try' tratamento de erro caso de algo errado com a o calculo do IR
  //O Aliquota e taxaDedezir sao taxas para calcular o IR
  //O IF estar vazio pq ja foi tratadi em "./fuc.cal_INSS_IR/soma.inss.js"
  try {
    if (SalarioBruto < 1320) {
      console.log(" ", SalarioBruto);
    } else if (SalarioBruto >= 1320 && SalarioBruto <= 2.112) {
      SalarioBruto = 0;
      return SalarioBruto;
    } else if (SalarioBruto >= 2112.01 && SalarioBruto <= 2826.65) {
      let Aliquota = 0.075;
      let taxaDeduzir = 158.4;
      SalarioBruto = SalarioBruto * Aliquota - taxaDeduzir;
      return SalarioBruto;
    } else if (SalarioBruto >= 2826.66 && SalarioBruto <= 3751.05) {
      let Aliquota = 0.15;
      let taxaDeduzir = 370.4;
      SalarioBruto = SalarioBruto * Aliquota - taxaDeduzir;
      return SalarioBruto;
    } else if (SalarioBruto >= 3751.06 && SalarioBruto <= 4664.68) {
      let Aliquota = 0.225;
      let taxaDeduzir = 651.73;
      SalarioBruto = SalarioBruto * Aliquota - taxaDeduzir;
      return SalarioBruto;
    } else if (SalarioBruto >= 4664.68) {
      let Aliquota = 0.275;
      let taxaDeduzir = 884.96;
      SalarioBruto = SalarioBruto * Aliquota - taxaDeduzir;
      return SalarioBruto;
    } else {
      console.log(
        `O número ${SalarioBruto} não corresponde às nossas normas (Não use virgulas , use ponto"." no lugar!)`
      );
    }
  } catch (error) {
    console.log("Erro em calcular IR", error);
  }
};
module.exports = ValorFinalIR;
