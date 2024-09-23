const fs = require('fs');
const readlineSync = require('readline-sync');

const filePath = 'users.json'; // Caminho direto para o arquivo

// Função para ler usuários do arquivo
const readUsers = () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

// Função para escrever usuários no arquivo
const writeUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users,));
};

exports.createUser = () => {
    const users = readUsers();
    const name = readlineSync.question('Nome: ');
    const email = readlineSync.question('Email: ');

    const user = { id: users.length + 1, name, email };
    users.push(user);
    writeUsers(users);
    console.log('Usuário criado:', user);
};

exports.getUsers = () => {
    const users = readUsers();
    console.log('Usuários:', users);
};

exports.updateUser = () => {
    const users = readUsers();
    const id = readlineSync.questionInt('ID do usuário a ser atualizado: ');
    const user = users.find(u => u.id === id);

    if (user) {
        user.name = readlineSync.question('Novo nome: ');
        user.email = readlineSync.question('Novo email: ');
        writeUsers(users);
        console.log('Usuário atualizado:', user);
    } else {
        console.log('Usuário não encontrado.');
    }
};

exports.deleteUser = () => {
    const users = readUsers();
    const id = readlineSync.questionInt('ID do usuário a ser deletado: ');
    const newUsers = users.filter(u => u.id !== id);

    if (newUsers.length < users.length) {
        writeUsers(newUsers);
        console.log('Usuário deletado.');
    } else {
        console.log('Usuário não encontrado.');
    }
};
