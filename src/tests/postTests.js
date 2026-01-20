import axios from 'axios';

const URL_API = 'http://0.0.0.0:3000';

let erros = 0;
let acertos = 0;

async function executarTestesPost() {

  const teste1 = 'Testando requisicao listar todos os posts: '
  let postTest = '';
  try {
    const resposta1 = await axios.get(URL_API + '/posts');
    postTest = resposta1.data[0].id;
    acertos = acertos + 1;
    console.log(teste1 + 'sucesso.')
  } catch (erro) {
    console.error(teste1 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }

  const teste2 = 'Testando requisicao listar post: '
  try {
    const resposta2 = await axios.get(URL_API + '/posts/' + postTest);
    acertos = acertos + 1;
    console.log(teste2 + 'sucesso.')
  } catch (erro) {
    console.error(teste2 + 'erro.');
    console.error(erro.message);    
    erros = erros + 1;
  }

  const teste3 = 'Testando requisicao criar post '
  let testePostID = ''
  try {
    const postData = {
      category: 'História',
      topic: 'como destruir um País com apenas 1',
      description: 'Donec tempus tempus justo, non commodo sapien tempus vitae. Duis scelerisque purus',
      user_id: '7758d134-0705-4928-b801-6f9fd3d2538c'
    }
    const resposta3 = await axios.post(URL_API + '/posts/', postData);
    acertos = acertos + 1;
    console.log(teste3 + 'sucesso.')
    testePostID = resposta3.data.id;

  } catch (erro) {
    console.error(teste3 + ': erro.');
    console.error(erro.message);
    erros = erros + 1;
  }

  const teste4 = 'Testando requisicao atualizar post: '
 
  try {
    const postDataUpdate = {
      category: 'História',
      topic: 'Como tornar um País Forte',
      description: 'Donec tempus tempus justo, non commodo sapien tempus vitae. Duis scelerisque purus at placerat laoreet. Aliquam quis metus ut lacus sodales hendrerit. Proin feugiat ligula non ligula sollicitudin tristique. Sed porta lectus vel lectus malesuada, bibendum fringilla urna varius. Aenean eget ex elit. Nulla finibus dolor metus, non hendrerit urna pretium ac. Nunc dapibus metus ante, ut bibendum nisi scelerisque in. Mauris ornare arcu felis, in elementum nibh volutpat non.',
      userid: '7758d134-0705-4928-b801-6f9fd3d2538c'
    }

    const resposta4 = await axios.put(URL_API + '/posts/' + testePostID, postDataUpdate);
    acertos = acertos + 1;
    console.log(teste4 + 'sucesso.')
  } catch (erro) {
    console.error(teste4 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }

  const teste6 = 'Testando requisicao buscar post por categoria: '
  try {
    const dadosCategoria = {
      category: 'História'
    };
    const resposta6 = await axios.get(URL_API + '/posts/', {data: dadosCategoria});
    acertos = acertos + 1;
    console.log(teste6 + 'sucesso.')
  } catch (erro) {
    console.error(teste6 + 'erro.');
    console.error(erro);
    erros = erros + 1;
  }

  const teste5 = 'Testando requisicao deletar post: '
  try {
    const resposta5 = await axios.delete(URL_API + '/posts/' + testePostID);
    acertos = acertos + 1;
    console.log(teste5 + 'sucesso.')
  } catch (erro) {
    console.error(teste5 + 'erro.');
    console.error(erro.message);
    erros = erros + 1;
  }  

  console.log('Sucesso: ', acertos)
  console.log('Erros:', erros)

}

executarTestesPost();

