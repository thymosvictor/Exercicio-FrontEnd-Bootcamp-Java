const form = document.getElementById("produtoForm");
const tabela = document.getElementById("tabelaProdutos");
const alerta = document.getElementById("alerta");
const btnSalvar = document.getElementById("btnSalvar");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const codigo = document.getElementById("codigo").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    const ativo = document.getElementById("ativo").value;

    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${codigo}</td>
        <td>${descricao}</td>
        <td>R$ ${parseFloat(preco).toFixed(2)}</td>
        <td>${ativo}</td>
    `;

    tabela.appendChild(linha);

    // Mostrar alerta
    alerta.style.display = "flex";

    // Mudar cor do botão
    btnSalvar.classList.add("salvo");

    form.reset();
});

function fecharAlerta() {
    alerta.style.display = "none";
}





//Atividade Anterior//
// const funcionarios = [];

// const inputNome = document.getElementById("nome");
// const btnAdicionar = document.getElementById("addFuncionarioBtn");
// const lista = document.getElementById("listaFuncionarios");
// const mensagem = document.getElementById("mensagem");

// console.log("Sistema de Gerenciamento de Funcionários iniciado.");

// btnAdicionar.addEventListener("click", () => {
//     const nome = inputNome.value.trim();

//     if (nome === "") {
//         console.warn("Tentativa de cadastro com nome vazio.");
//         mostrarMensagem("Digite o nome do funcionário.", false);
//         return;
//     }

//     funcionarios.push(nome);

//     console.log(`Funcionário cadastrado: ${nome}`);
//     console.log("Lista atual de funcionários:", funcionarios);

//     atualizarLista();
//     mostrarMensagem(`Funcionário "${nome}" cadastrado com sucesso!`, true);

//     inputNome.value = "";
// });

// function atualizarLista() {
//     lista.innerHTML = "";

//     funcionarios.forEach((funcionario, index) => {
//         const li = document.createElement("li");
//         li.textContent = `${index + 1}. ${funcionario}`;
//         lista.appendChild(li);
//     });

//     console.log("Tela atualizada com sucesso.");
// }

// function mostrarMensagem(texto, sucesso) {
//     mensagem.textContent = texto;
//     mensagem.style.color = sucesso ? "#4CAF50" : "#FF5252";
//     mensagem.style.display = "block";

//     setTimeout(() => {
//         mensagem.style.display = "none";
//     }, 2500);
// }
