function clicar(){

    let nome = document.querySelector('.nome').value.trim()
    let email = document.querySelector('.email').value.trim()

    if(nome === "" || email === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    } else {
        localStorage.setItem('nomeUsuario', nome);
        localStorage.setItem('emailUsuario', email);


        window.location.href = "../pagina2/index.html"
    }
}
    