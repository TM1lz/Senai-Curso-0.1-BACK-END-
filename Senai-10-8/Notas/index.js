// Inicio das dependencias
const rd = require("readline-sync"); // Importa o módulo readline-sync para entrada de dados pelo usuário
// Fim das dependencias

// Vars
// A variável notaS é usada para armazenar as notas inseridas pelo usuário
const notaS = [];

const perguntas = async () => {
  // Pergunta o nome da matéria ao usuário
  const disciplina = rd.question(`[NODE] - ReadLine
    Bem-vindo :)
    Este sistema ira calcular sua media em certas materias.

    Por favor, digite o nome da materia para ver sua media:`);

  // Pergunta o número de notas que o usuário deseja inserir e converte para número
  const numMaterias = parseInt(rd.question(`
    Quantas notas voce deseja colocar?`), 10); // A base 10 é especificada para garantir a conversão correta

  // Coleta as notas inseridas pelo usuário
  for (let i = 0; i < numMaterias; i++) {
    // Pergunta cada nota e adiciona ao array notaS
    const nota = rd.question(`Digite a nota [${i + 1}]: `);
    notaS.push(nota);
  }

  // Converte as notas de strings para números
  const notasN = notaS.map(Number);

  // Inicializa a variável notaSoma com 0
  let notaSoma = 0;

  // Calcula a soma das notas
  for (let i = 0; i < notasN.length; i++) {
    // Exibe cada nota e acumula a soma
    console.log(`Nota [${i + 1}]: ${notasN[i]}`);
    notaSoma += notasN[i];
  }

  // Calcula a média das notas
  const media = notaSoma / notasN.length;

  // Exibe a soma e a média das notas
  console.log(`Na materia "${disciplina}"`);
  console.log(`A soma das notas e: ${notaSoma}`);
  console.log(`A media das notas e: ${media.toFixed(2)}`); // Exibe a média com duas casas decimais
};

// Chama a função perguntas para iniciar o processo
perguntas();

