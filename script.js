document.getElementById("contatoForm").addEventListener("submit", function(event){
    event.preventDefault(); // evita envio real do formulário

    const nome = document.getElementById("nome").value;
    const resposta = document.getElementById("resposta");

    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida. Entraremos em contato em breve.`;
    resposta.style.color = "green";

    // limpa o formulário
    this.reset();
});
