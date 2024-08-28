const ValorFinalIR = (SalarioBruto)=>{
    if (SalarioBruto < 1320) {
        console.log(
          "Seu salário é menor que o salário mínimo no Brasil. Procure seus direitos. ",
          SalarioBruto
        );
      } else if (SalarioBruto >= 1320 && SalarioBruto <= 2.112) {
        return SalarioBruto = 0
      } else if (SalarioBruto >= 2112.01 && SalarioBruto <= 2826.65) {
        let Aliquota = 0.075;
        let taxaDeduzir = 158.40;
        return SalarioBruto * Aliquota - taxaDeduzir;
      } else if (SalarioBruto >= 2826.66 && SalarioBruto <= 3751.05) {
        let Aliquota = 0.15;
        let taxaDeduzir = 370.40;
        return SalarioBruto * Aliquota - taxaDeduzir;
      } else if (SalarioBruto >= 3751.06 && SalarioBruto <= 4664.68) {
        let Aliquota = 0.225;
        let taxaDeduzir = 651.73;
        return SalarioBruto * Aliquota - taxaDeduzir;
      } else if (SalarioBruto >= 4664.68){
        let Aliquota = 0.275
        let taxaDeduzir = 884.96
        return SalarioBruto * Aliquota - taxaDeduzir;
      }else{
        console.log(`O número ${SalarioBruto} não corresponde às nossas normas`);
      }
}
module.exports = ValorFinalIR;