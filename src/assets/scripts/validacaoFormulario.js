function validateForm(){
    let nome = document.forms["formularioContatos"]["campo-name"].value.trim();
    let email = document.forms["formularioContatos"]["campo-email"].value.trim()
    
    if(nome == "" || email == "") {
        window.alert("Você tem que preencher o nome ou email")
        return false;
    }
    return true;
}