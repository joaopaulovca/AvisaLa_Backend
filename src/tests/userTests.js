import axios from 'axios';

const URL_API = 'http://0.0.0.0:3000';

let erros = 0;
let acertos = 0;

async function executarTestes() {

  const teste1 = 'Testando requisicao listar tudo: '
  let userTest = '';
  try {
    const resposta1 = await axios.get(URL_API + '/users');
    userTest = resposta1.data[0].id;
    acertos = acertos + 1;
    console.log(teste1 + 'sucesso.')
  } catch (erro) {
    console.error(teste1 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }

  const teste2 = 'Testando requisicao listar usuario: '
  try {
    const resposta2 = await axios.get(URL_API + '/users/' + userTest);
    acertos = acertos + 1;
    console.log(teste2 + 'sucesso.')
  } catch (erro) {
    console.error(teste2 + 'erro.');
    console.error(erro.message);    
    erros = erros + 1;
  }

  const teste3 = 'Testando requisicao inserir usuario: '
  let testeUsuarioID = ''
  try {
    const userData = {
      name: 'Test user 111',
      data_nascimento: '04.04.1989',
      email: 'teste@email.com',
      username: 'test',
      password: 'test'
    }
    const resposta3 = await axios.post(URL_API + '/users/', userData);
    acertos = acertos + 1;
    console.log(teste3 + 'sucesso.')
    testeUsuarioID = resposta3.data.id
  } catch (erro) {
    console.error(teste3 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }

  const teste4 = 'Testando requisicao atualizar usuario: '
  try {
    const userDataUpdate = {
      name: 'Test user atualizado',
      data_nascimento: '04.03.1989',
      email: 'teste3@email.com',
      username: 'test3',
      password: 'test3'
    }
    const resposta4 = await axios.put(URL_API + '/users/' + testeUsuarioID, userDataUpdate);
    acertos = acertos + 1;
    console.log(teste4 + 'sucesso.')
  } catch (erro) {
    console.error(teste4 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }

  const teste5 = 'Testando requisicao deletar usuario: '
  try {
    const resposta5 = await axios.delete(URL_API + '/users/' + testeUsuarioID);
    acertos = acertos + 1;
    console.log(teste5 + 'sucesso.')
  } catch (erro) {
    console.error(teste5 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }  

  const teste6 = 'Testando login com usuario existente: '
  try {
    const dadosLogin = {
      username: 'joao',
      password: 'joao'
    } 
    const resposta6 = await axios.get(URL_API + '/users/loginUsuario', {data: dadosLogin});
    acertos = acertos + 1;
    console.log(teste6 + 'sucesso.')
  } catch (erro) {
    console.error(teste6 + 'erro.');
    console.error(erro);
    erros = erros + 1;
  }

  const teste7 = 'Testando login com usuario inexistente: '
  try {
    const dadosLogin2 = {
      username: 'joao2',
      password: 'joao'
    } 
    const resposta7 = await axios.get(URL_API + '/users/loginUsuario', {data: dadosLogin2});
    acertos = acertos + 1;
    console.log(teste7 + 'sucesso.')
  } catch (erro) {
    console.error(teste7 + 'erro.');
    console.error(erro);
    erros = erros + 1;
  }

  console.log('Sucesso: ', acertos)
  console.log('Erros:', erros)

}

executarTestes();