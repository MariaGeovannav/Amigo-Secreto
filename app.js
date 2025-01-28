let listaDeAmigos = [];

function adicionarAmigo() {
    let entrada = document.querySelector("input").value;

    if (entrada == " ") {
        alert("Por favor, insira um nome.");
    } else {
        listaDeAmigos.push(entrada);
        limparCampo();
        console.log(listaDeAmigos);
        adicionarNomes();
    }

}

function adicionarNomes() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = listaDeAmigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {

    if (listaDeAmigos == 0) {
        alert("Por favor adicione um amigo");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let indiceSorteado = listaDeAmigos[indiceAleatorio];
        adicionarNomes();
        document.getElementById("listaAmigos").style.display = "none"; 
        let amigoSorteado = document.getElementById("resultado");
        amigoSorteado.innerHTML = `Amigo sorteado: ${indiceSorteado}`;
    }
}


function limparCampo() {
    entrada = document.querySelector("input");
    entrada.value = " ";
}

