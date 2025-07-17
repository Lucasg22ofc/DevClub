let nome = localStorage.getItem('nomeUsuario')
let email = localStorage.getItem('emailUsuario')

if (nome){
   alert(`Seja Bem vindo(a) ${nome}!`);
}