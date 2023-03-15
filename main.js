function add() {
    nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome);
    window.location = "salas.html";
}