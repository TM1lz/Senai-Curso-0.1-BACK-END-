const userController = require('./fuc.users/user.fuc');
const readlineSync = require('readline-sync');

const menu = () => {
    console.log(`
        ===============================
             [NODEJS] - CRUD
        ===============================
        1. Criar Usuário
        2. Listar Usuários
        3. Atualizar Usuário
        4. Deletar Usuário
        0. Sair
        ===============================
            `);

    const choice = readlineSync.questionInt('Opção: ');

    switch (choice) {
        case 1:
            userController.createUser();
            break;
        case 2:
            userController.getUsers();
            break;
        case 3:
            userController.updateUser();
            break;
        case 4:
            userController.deleteUser();
            break;
        case 0:
            console.log('Saindo...');
            process.exit();
        default:
            console.log('Opção inválida.');
    }

    menu();
};

// Inicia o menu
menu();
