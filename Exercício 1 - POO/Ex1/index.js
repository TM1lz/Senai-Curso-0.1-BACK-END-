
const rd = require('readline-sync') // Importa o módulo readline-sync para ler entradas do usuário

// Fim de dependências

// Início de cores no console
const red = '\x1b[31m'; // Define a cor vermelha para o texto
const reset = '\x1b[0m'; // Reseta a cor para o padrão
// Fim de cores no console

// Início de const e let necessárias
// Declaração de funções e variáveis para o cálculo do IMC

// Texto visível para o usuário
function global() {

    // Função que exibe o menu e retorna a opção escolhida pelo usuário
    const Menu = () => {
        console.log('', '\n', '') // Deixa espaços entre os elementos
        console.log('[FS] NODE - File System\n[READLINE-SYNC] NODE - ReadLine-Sync')
        console.log('')
        // Mostra as opções disponíveis para o usuário
        console.log(`Escolha sua opção:  
            0 = Calcular IMC!
            1 = ${red}Sair${reset}`);
        
        // Lê a opção escolhida pelo usuário
        const TipoDeOperacao = rd.question('')
        return TipoDeOperacao
    }
    
    // Obtém a opção selecionada pelo usuário
    const TipoDeOperacao = Menu()
    
    // Se a opção escolhida for 0, realiza o cálculo do IMC
    if (TipoDeOperacao == 0) {
        // Cria um objeto para armazenar as informações do usuário
        const user = {
            nome: ``,
            altura: ``,
            peso: ``,
        };
        console.log(user);
        
        // Função assíncrona para obter as informações do usuário e calcular o IMC
        const UserInfo = async () => {
            user.nome = rd.question(`Qual seu nome ?`)
            console.log(`Bem, para afins de cálculos, preciso que você use "." em vez de vírgula
                Ex: 1,60 irá ficar 1.60`)
            user.peso = rd.question(`Qual seu peso?`)
            user.altura = rd.question(`Qual sua altura?`)
            // Aguarda o cálculo do IMC ser concluído
            await CalIMC()
            // Exibe o resultado do IMC formatado com duas casas decimais
            console.log(`
                Olá ${user.nome}, seu IMC é :
                ${CalIMC().toFixed(2)}`) 
        }
        
        // Função para calcular o IMC
        const CalIMC = () => {
            // Calcula o IMC usando a fórmula peso / (altura * altura)
            const FinalIMC = user.peso / (user.altura * user.altura)
            return FinalIMC
        }
        
        // Exporta a função UserInfo, mas a execução da função deve ser feita fora deste módulo
        module.exports = UserInfo()
    } else {
        // Se a opção escolhida não for 0, encerra o programa
        console.log(`Programa encerrado`)
    }
}

// Chama a função global para iniciar o programa
global()



