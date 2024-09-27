const readline = require('readline-sync');

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0; // Velocidade inicial
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${this.velocidade} km/h`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas; // Atributo único para Carro
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo} (${this.ano}) - ${this.portas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, tipo) {
        super(marca, modelo, ano);
        this.tipo = tipo; // Atributo único para Moto
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo} (${this.ano}) - Tipo: ${this.tipo}`;
    }
}

const veiculos = [];

function adicionarVeiculo() {
    const tipo = readline.question('Digite o tipo de veículo (carro/moto): ').toLowerCase();
    const marca = readline.question('Digite a marca: ');
    const modelo = readline.question('Digite o modelo: ');
    const ano = readline.question('Digite o ano: ');

    if (tipo === 'carro') {
        const portas = readline.questionInt('Digite o número de portas: ');
        veiculos.push(new Carro(marca, modelo, ano, portas));
    } else if (tipo === 'moto') {
        const tipoMoto = readline.question('Digite o tipo de moto: ');
        veiculos.push(new Moto(marca, modelo, ano, tipoMoto));
    } else {
        console.log('Tipo de veículo inválido.');
    }
}

function listarVeiculos() {
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado.');
        return;
    }
    veiculos.forEach((veiculo, index) => {
        console.log(`${index + 1}: ${veiculo.exibirDetalhes()}`);
    });
}

function acelerarVeiculo() {
    const index = readline.questionInt('Digite o número do veículo que deseja acelerar: ') - 1;
    if (index >= 0 && index < veiculos.length) {
        veiculos[index].acelerar();
    } else {
        console.log('Veículo inválido.');
    }
}

function menu() {
    let opcao;
    do {
        console.log(`
            [NODE] -- ReadLineSycn
             Menu:
            1. Adicionar Veículo
            2. Listar Veículos
            3. Acelerar Veículo
            4. Sair
            `);
        opcao = readline.questionInt('Escolha uma opção: ');

        switch (opcao) {
            case 1:
                adicionarVeiculo();
                break;
            case 2:
                listarVeiculos();
                break;
            case 3:
                acelerarVeiculo();
                break;
            case 4:
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida.');
        }
    } while (opcao !== 4);
}

menu();
