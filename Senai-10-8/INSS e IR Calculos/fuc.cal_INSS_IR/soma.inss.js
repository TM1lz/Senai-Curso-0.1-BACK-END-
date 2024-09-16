const ValorFinalInss = (SalarioBruto) => {
  //O 'try' tratamento de erro caso de algo errado com a o calculo do INSS
  //O Aliquota e taxaDedezir sao taxas para calcular o INSS
  try {
    if (SalarioBruto < 1320) {
      console.log(
        "Seu salário é menor que o salário mínimo no Brasil. Procure seus direitos. ",
        SalarioBruto
      );
    } else if (SalarioBruto >= 1320 && SalarioBruto <= 1411.0) {
      let Aliquota = 0.075;
      return SalarioBruto * Aliquota;
    } else if (SalarioBruto >= 1412.0 && SalarioBruto <= 2666.68) {
      let Aliquota = 0.09;
      let taxaDeduzir = 21.18;
      return SalarioBruto * Aliquota - taxaDeduzir;
    } else if (SalarioBruto >= 2666.69 && SalarioBruto <= 4000.03) {
      let Aliquota = 0.12;
      let taxaDeduzir = 101.18;
      return SalarioBruto * Aliquota - taxaDeduzir;
    } else if (SalarioBruto >= 4000.04) {
      let Aliquota = 0.14;
      let taxaDeduzir = 181.18;
      return SalarioBruto * Aliquota - taxaDeduzir;
    } else {
      console.log(
        `O "${SalarioBruto}" não corresponde às nossas normas (Não use virgulas , use ponto"." no lugar!)`
      );
    }
  } catch (error) {
    console.log("Algo deu errado em soma.inss.js : ", error);
  }
};
module.exports = ValorFinalInss;
